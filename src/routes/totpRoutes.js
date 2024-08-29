import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { TOTP_SERVICE_URL } from '../config/envConfig.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Proxy para validar TOTP
router.post('/validate', authMiddleware, createProxyMiddleware({
    target: TOTP_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/totp/validate': '/totp/validate' }
}));

export default router;
