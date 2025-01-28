<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "fs";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'admin',
  },
  server: {
    https: {
<<<<<<< HEAD
      key: './certificates/localhost-key.pem',
      cert: './certificates/localhost.pem',
=======
      key: fs.readFileSync("./certificates/eyongkart-privateKey.key"),
      cert: fs.readFileSync("./certificates/eyongkart.crt"),
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/admin/',
});