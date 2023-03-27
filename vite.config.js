import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
    @import "./style/variables/_colors.scss";
    @import "./style/variables/_typography.scss";
    @import "./style/variables/_animation.scss";
    @import "./style/mixins/_flex.scss";
    @import "./style/mixins/_size.scss";
    `,
      },
    },
  },
});
