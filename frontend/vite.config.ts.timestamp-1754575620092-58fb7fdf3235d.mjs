// vite.config.ts
import { defineConfig, loadEnv } from "file:///G:/F/MyPortfolio/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///G:/F/MyPortfolio/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var env = loadEnv("dev", process.cwd(), "");
var vite_config_default = defineConfig(({ mode }) => {
  const env2 = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    define: {
      "process.env.PUBLIC_KEY": JSON.stringify(env2.PUBLIC_KEY),
      "process.env.SERVICE_ID": JSON.stringify(env2.SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env2.TEMPLATE_ID),
      "process.env.SERVICE_NAME": JSON.stringify(env2.SERVICE_NAME)
    },
    plugins: [react()],
    build: {
      assetsInlineLimit: 0,
      // Disable asset inlining
      chunkSizeWarningLimit: 2e3
      // Increase warning limit (MB)
    },
    rollupOptions: {
      output: {
        manualChunks: {
          threejs: ["three", "@react-three/fiber"],
          models: ["/static/**/*.glb", "/static/**/*.gltf"]
        }
      }
    },
    assetsInclude: ["**/*.glb", "**/*.gltf"]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxGXFxcXE15UG9ydGZvbGlvXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxGXFxcXE15UG9ydGZvbGlvXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9GL015UG9ydGZvbGlvL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuY29uc3QgZW52ID0gbG9hZEVudihcImRldlwiLCBwcm9jZXNzLmN3ZCgpLCBcIlwiKTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XG4gIHJldHVybiB7XG4gICAgYmFzZTogXCIuL1wiLFxuICAgIGRlZmluZToge1xuICAgICAgXCJwcm9jZXNzLmVudi5QVUJMSUNfS0VZXCI6IEpTT04uc3RyaW5naWZ5KGVudi5QVUJMSUNfS0VZKSxcbiAgICAgIFwicHJvY2Vzcy5lbnYuU0VSVklDRV9JRFwiOiBKU09OLnN0cmluZ2lmeShlbnYuU0VSVklDRV9JRCksXG4gICAgICBcInByb2Nlc3MuZW52LlRFTVBMQVRFX0lEXCI6IEpTT04uc3RyaW5naWZ5KGVudi5URU1QTEFURV9JRCksXG4gICAgICBcInByb2Nlc3MuZW52LlNFUlZJQ0VfTkFNRVwiOiBKU09OLnN0cmluZ2lmeShlbnYuU0VSVklDRV9OQU1FKSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICBidWlsZDoge1xuICAgICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsIC8vIERpc2FibGUgYXNzZXQgaW5saW5pbmdcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCwgLy8gSW5jcmVhc2Ugd2FybmluZyBsaW1pdCAoTUIpXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdGhyZWVqczogW1widGhyZWVcIiwgXCJAcmVhY3QtdGhyZWUvZmliZXJcIl0sXG4gICAgICAgICAgbW9kZWxzOiBbXCIvc3RhdGljLyoqLyouZ2xiXCIsIFwiL3N0YXRpYy8qKi8qLmdsdGZcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXNzZXRzSW5jbHVkZTogW1wiKiovKi5nbGJcIiwgXCIqKi8qLmdsdGZcIl0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVEsU0FBUyxjQUFjLGVBQWU7QUFDM1MsT0FBTyxXQUFXO0FBRWxCLElBQU0sTUFBTSxRQUFRLE9BQU8sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUU1QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNQSxPQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLDBCQUEwQixLQUFLLFVBQVVBLEtBQUksVUFBVTtBQUFBLE1BQ3ZELDBCQUEwQixLQUFLLFVBQVVBLEtBQUksVUFBVTtBQUFBLE1BQ3ZELDJCQUEyQixLQUFLLFVBQVVBLEtBQUksV0FBVztBQUFBLE1BQ3pELDRCQUE0QixLQUFLLFVBQVVBLEtBQUksWUFBWTtBQUFBLElBQzdEO0FBQUEsSUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsT0FBTztBQUFBLE1BQ0wsbUJBQW1CO0FBQUE7QUFBQSxNQUNuQix1QkFBdUI7QUFBQTtBQUFBLElBQ3pCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixTQUFTLENBQUMsU0FBUyxvQkFBb0I7QUFBQSxVQUN2QyxRQUFRLENBQUMsb0JBQW9CLG1CQUFtQjtBQUFBLFFBQ2xEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWUsQ0FBQyxZQUFZLFdBQVc7QUFBQSxFQUN6QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImVudiJdCn0K
