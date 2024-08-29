import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { HOME_SERVICE_URL } from '../config/envConfig.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Redirige la solicitud del home al microservicio correspondiente
router.get('/', authMiddleware, createProxyMiddleware({ 
    target: HOME_SERVICE_URL, 
    changeOrigin: true 
}));

export default router;
