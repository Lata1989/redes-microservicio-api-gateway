import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { AUTH_SERVICE_URL } from '../config/envConfig.js';

const router = express.Router();

// Redirige la solicitud de registro al microservicio de autenticación
router.post('/register', createProxyMiddleware({ 
    target: AUTH_SERVICE_URL, 
    changeOrigin: true 
}));

export default router;
