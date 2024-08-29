import express from 'express';
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import totpRoutes from './routes/totpRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import { authMiddleware } from './middleware/authMiddleware.js';

const app = express();

app.use(express.json());  // Middleware para parsear el cuerpo de la solicitud a JSON

// Middleware para registrar solicitudes entrantes
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Rutas públicas
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

// Rutas protegidas
app.use('/totp', authMiddleware, totpRoutes);
app.use('/home', authMiddleware, homeRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API Gateway funcionando OK!');
});

export default app;
