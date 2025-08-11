import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno basadas en el modo
  const env = loadEnv(mode, resolve(__dirname, 'env'));

  return {
    plugins: [react()],
    server: {
      port: 8327, // Opcional, podés cambiar el puerto si querés
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    envPrefix: 'VITE_',
    define: {
      'process.env': env // Vincular las variables de entorno cargadas
    }
  };
});
