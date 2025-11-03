import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    allowedHosts: [
      // ✅ Add your Cloudflare tunnel host here
      "embedded-textile-degree-typical.trycloudflare.com",
    ],
    port: 5174, // or whatever your port is
  },
});
