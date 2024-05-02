import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = loadEnv("dev", process.cwd(), "");
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.PUBLIC_KEY": JSON.stringify(env.PUBLIC_KEY),
      "process.env.SERVICE_ID": JSON.stringify(env.SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env.TEMPLATE_ID),
      "process.env.SERVICE_NAME": JSON.stringify(env.SERVICE_NAME),
    },
    plugins: [react()],
  };
});
