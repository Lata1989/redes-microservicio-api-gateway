import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AUTH_SERVICE_URL } from '../config/envConfig.js';

const router = express.Router();

// Proxy para registrar un nuevo usuario
router.post('/register', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth/register': '/register'  // Reescribe la ruta para coincidir con la ruta del microservicio
  },
  logLevel: 'debug'  // Ayuda a depurar el proxy
}));

// Proxy para autenticar un usuario
router.post('/login', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth/login': '/login'  // Reescribe la ruta para coincidir con la ruta del microservicio
  },
  logLevel: 'debug'  // Ayuda a depurar el proxy
}));

export default router;
