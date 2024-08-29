import express from 'express';
import bodyParser from 'body-parser'; // Importa body-parser
import authRoutes from './routes/authRoutes.js';
import totpRoutes from './routes/totpRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AUTH_SERVICE_URL, TOTP_SERVICE_URL, HOME_SERVICE_URL } from './config/envConfig.js';

const app = express();

// Configurar body-parser para manejar cuerpos de solicitudes JSON
app.use(bodyParser.json()); // Parsear cuerpos JSON automáticamente

// Middleware para registrar solicitudes entrantes
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Rutas públicas
app.use('/auth', authRoutes);

// Rutas protegidas con autenticación
app.use('/totp', authMiddleware, totpRoutes);
app.use('/home', authMiddleware, homeRoutes);

// Configuración del proxy para los microservicios
app.use('/auth', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth': ''  // Reescribe la ruta para que coincida con la ruta del microservicio
  },
  logLevel: 'debug'  // Ayuda a depurar el proxy
}));

app.use('/totp', createProxyMiddleware({
  target: TOTP_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/totp': ''  // Reescribe la ruta para que coincida con la ruta del microservicio
  },
  logLevel: 'debug'  // Ayuda a depurar el proxy
}));

app.use('/home', createProxyMiddleware({
  target: HOME_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/home': ''  // Reescribe la ruta para que coincida con la ruta del microservicio
  },
  logLevel: 'debug'  // Ayuda a depurar el proxy
}));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API Gateway funcionando OK!');
});

export default app;
