
import { resolve } from "path";

import { sync } from "glob";

export default {
  resolve: {
    alias: {
      "@js": resolve(__dirname, "src/assets/js"),
    },
  },
  plugins: [],
  appType: "mpa",
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
};