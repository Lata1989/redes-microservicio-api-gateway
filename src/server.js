import app from './app.js';
import { port } from './config/envConfig.js';

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`API Gateway funcionando en el puerto ${port}`);
});
