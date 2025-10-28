// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://and-vu.github.io',
  base: '/and-vu.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});