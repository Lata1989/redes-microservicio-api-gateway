import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

export const port = process.env.PORT || 3000;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

// Asegúrate de que esta línea esté incluida si la estás utilizando
export const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;
export const TOTP_SERVICE_URL = process.env.TOTP_SERVICE_URL;
export const HOME_SERVICE_URL = process.env.HOME_SERVICE_URL;
