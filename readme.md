api-gateway/
│
├── src/
│   ├── config/
│   │   └── envConfig.js        # Variables de entorno
│   ├── middleware/
│   │   └── authMiddleware.js   # Middleware para verificar JWT
│   ├── routes/
│   │   ├── authRoutes.js       # Rutas para autenticación
│   │   ├── usersRoutes.js      # Rutas para usuarios
│   │   ├── totpRoutes.js       # Rutas para TOTP
│   │   └── homeRoutes.js       # Rutas para el home
│   ├── app.js                  # Configuración de la aplicación Express
│   └── server.js               # Punto de entrada del servidor
│
├── .env                        # Variables de entorno
├── .gitignore                  # Archivos y carpetas a ignorar en Git
└── package.json                # Dependencias y scripts
