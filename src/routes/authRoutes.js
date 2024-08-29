import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AUTH_SERVICE_URL } from '../config/envConfig.js';

const router = express.Router();

// Proxy para registrar un nuevo usuario
router.post('/register', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth/register': '/auth/register'  // Reescribe la ruta a la del microservicio
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request to: ${AUTH_SERVICE_URL}/auth/register`);
  },
}));

// Proxy para autenticar un usuario
router.post('/login', createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/auth/login': '/auth/login'  // Reescribe la ruta a la del microservicio
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request to: ${AUTH_SERVICE_URL}/auth/login`);
  },
}));

export default router;
