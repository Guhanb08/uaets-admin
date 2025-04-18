// vite.config.ts
import vue from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { fileURLToPath } from "node:url";
import AutoImport from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/unplugin-vue-components/dist/vite.js";
import {
  VueRouterAutoImports,
  getPascalCaseRouteName
} from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/unplugin-vue-router/dist/vite.mjs";
import { defineConfig } from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/vite/dist/node/index.js";
import VueDevTools from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Layouts from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import vuetify from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/vite-plugin-vuetify/dist/index.mjs";
import svgLoader from "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/guhanb/Documents/Doodoo/Official/Codes/Projects/gets/taxiapp/taxiappadmin/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    // Docs: https://github.com/posva/unplugin-vue-router
    // ℹ️ This plugin should be placed before vue plugin
    VueRouter({
      getRouteName: (routeNode) => {
        return getPascalCaseRouteName(routeNode).replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
      }
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "swiper-container" || tag === "swiper-slide"
        }
      }
    }),
    VueDevTools(),
    vueJsx(),
    // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "src/assets/styles/variables/_vuetify.scss"
      }
    }),
    // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "./src/layouts/"
    }),
    // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: ["src/@core/components", "src/views", "src/components"],
      dts: true,
      resolvers: [
        (componentName) => {
          if (componentName === "VueApexCharts")
            return {
              name: "default",
              from: "vue3-apexcharts",
              as: "VueApexCharts"
            };
        }
      ]
    }),
    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        "@vueuse/core",
        "@vueuse/math",
        "vue-i18n",
        "pinia"
      ],
      dirs: [
        "./src/@core/utils",
        "./src/@core/composable/",
        "./src/composables/",
        "./src/utils/",
        "./src/plugins/*/composables/*"
      ],
      vueTemplate: true,
      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ["useCookies", "useStorage"]
    }),
    svgLoader()
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@themeConfig": fileURLToPath(
        new URL("./themeConfig.ts", __vite_injected_original_import_meta_url)
      ),
      "@core": fileURLToPath(new URL("./src/@core", __vite_injected_original_import_meta_url)),
      "@layouts": fileURLToPath(new URL("./src/@layouts", __vite_injected_original_import_meta_url)),
      "@images": fileURLToPath(
        new URL("./src/assets/images/", __vite_injected_original_import_meta_url)
      ),
      "@styles": fileURLToPath(
        new URL("./src/assets/styles/", __vite_injected_original_import_meta_url)
      ),
      "@configured-variables": fileURLToPath(
        new URL("./src/assets/styles/variables/_template.scss", __vite_injected_original_import_meta_url)
      ),
      "@db": fileURLToPath(
        new URL("./src/plugins/fake-api/handlers/", __vite_injected_original_import_meta_url)
      ),
      "@api-utils": fileURLToPath(
        new URL("./src/plugins/fake-api/utils/", __vite_injected_original_import_meta_url)
      )
    }
  },
  build: {
    chunkSizeWarningLimit: 5e3
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: ["./src/**/*.vue"]
  },
  server: {
    port: 5173
  }
  // base: '/uatadmin',
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ3VoYW5iL0RvY3VtZW50cy9Eb29kb28vT2ZmaWNpYWwvQ29kZXMvUHJvamVjdHMvZ2V0cy90YXhpYXBwL3RheGlhcHBhZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2d1aGFuYi9Eb2N1bWVudHMvRG9vZG9vL09mZmljaWFsL0NvZGVzL1Byb2plY3RzL2dldHMvdGF4aWFwcC90YXhpYXBwYWRtaW4vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2d1aGFuYi9Eb2N1bWVudHMvRG9vZG9vL09mZmljaWFsL0NvZGVzL1Byb2plY3RzL2dldHMvdGF4aWFwcC90YXhpYXBwYWRtaW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHtcbiAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gIGdldFBhc2NhbENhc2VSb3V0ZU5hbWUsXG59IGZyb20gXCJ1bnBsdWdpbi12dWUtcm91dGVyXCI7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGVcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuaW1wb3J0IExheW91dHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXCI7XG5pbXBvcnQgdnVldGlmeSBmcm9tIFwidml0ZS1wbHVnaW4tdnVldGlmeVwiO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICAvLyBcdTIxMzlcdUZFMEYgVGhpcyBwbHVnaW4gc2hvdWxkIGJlIHBsYWNlZCBiZWZvcmUgdnVlIHBsdWdpblxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBnZXRSb3V0ZU5hbWU6IChyb3V0ZU5vZGUpID0+IHtcbiAgICAgICAgLy8gQ29udmVydCBwYXNjYWwgY2FzZSB0byBrZWJhYiBjYXNlXG4gICAgICAgIHJldHVybiBnZXRQYXNjYWxDYXNlUm91dGVOYW1lKHJvdXRlTm9kZSlcbiAgICAgICAgICAucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZywgXCIkMS0kMlwiKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PlxuICAgICAgICAgICAgdGFnID09PSBcInN3aXBlci1jb250YWluZXJcIiB8fCB0YWcgPT09IFwic3dpcGVyLXNsaWRlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFZ1ZURldlRvb2xzKCksXG4gICAgdnVlSnN4KCksXG5cbiAgICAvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3ZpdGUtcGx1Z2luXG4gICAgdnVldGlmeSh7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgY29uZmlnRmlsZTogXCJzcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMvX3Z1ZXRpZnkuc2Nzc1wiLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIERvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb2huY2FtcGlvbmpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzI3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgTGF5b3V0cyh7XG4gICAgICBsYXlvdXRzRGlyczogXCIuL3NyYy9sYXlvdXRzL1wiLFxuICAgIH0pLFxuXG4gICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzI3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiBbXCJzcmMvQGNvcmUvY29tcG9uZW50c1wiLCBcInNyYy92aWV3c1wiLCBcInNyYy9jb21wb25lbnRzXCJdLFxuICAgICAgZHRzOiB0cnVlLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgLy8gQXV0byBpbXBvcnQgYFZ1ZUFwZXhDaGFydHNgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPT09IFwiVnVlQXBleENoYXJ0c1wiKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZyb206IFwidnVlMy1hcGV4Y2hhcnRzXCIsXG4gICAgICAgICAgICAgIGFzOiBcIlZ1ZUFwZXhDaGFydHNcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuXG4gICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0I3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICBcIkB2dWV1c2UvY29yZVwiLFxuICAgICAgICBcIkB2dWV1c2UvbWF0aFwiLFxuICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgIFwicGluaWFcIixcbiAgICAgIF0sXG4gICAgICBkaXJzOiBbXG4gICAgICAgIFwiLi9zcmMvQGNvcmUvdXRpbHNcIixcbiAgICAgICAgXCIuL3NyYy9AY29yZS9jb21wb3NhYmxlL1wiLFxuICAgICAgICBcIi4vc3JjL2NvbXBvc2FibGVzL1wiLFxuICAgICAgICBcIi4vc3JjL3V0aWxzL1wiLFxuICAgICAgICBcIi4vc3JjL3BsdWdpbnMvKi9jb21wb3NhYmxlcy8qXCIsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG5cbiAgICAgIC8vIFx1MjEzOVx1RkUwRiBEaXNhYmxlZCB0byBhdm9pZCBjb25mdXNpb24gJiBhY2NpZGVudGFsIHVzYWdlXG4gICAgICBpZ25vcmU6IFtcInVzZUNvb2tpZXNcIiwgXCJ1c2VTdG9yYWdlXCJdLFxuICAgIH0pLFxuXG4gICAgc3ZnTG9hZGVyKCksXG4gIF0sXG4gIGRlZmluZTogeyBcInByb2Nlc3MuZW52XCI6IHt9IH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgXCJAdGhlbWVDb25maWdcIjogZmlsZVVSTFRvUGF0aChcbiAgICAgICAgbmV3IFVSTChcIi4vdGhlbWVDb25maWcudHNcIiwgaW1wb3J0Lm1ldGEudXJsKVxuICAgICAgKSxcbiAgICAgIFwiQGNvcmVcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmMvQGNvcmVcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIkBsYXlvdXRzXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjL0BsYXlvdXRzXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgXCJAaW1hZ2VzXCI6IGZpbGVVUkxUb1BhdGgoXG4gICAgICAgIG5ldyBVUkwoXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1wiLCBpbXBvcnQubWV0YS51cmwpXG4gICAgICApLFxuICAgICAgXCJAc3R5bGVzXCI6IGZpbGVVUkxUb1BhdGgoXG4gICAgICAgIG5ldyBVUkwoXCIuL3NyYy9hc3NldHMvc3R5bGVzL1wiLCBpbXBvcnQubWV0YS51cmwpXG4gICAgICApLFxuICAgICAgXCJAY29uZmlndXJlZC12YXJpYWJsZXNcIjogZmlsZVVSTFRvUGF0aChcbiAgICAgICAgbmV3IFVSTChcIi4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL190ZW1wbGF0ZS5zY3NzXCIsIGltcG9ydC5tZXRhLnVybClcbiAgICAgICksXG4gICAgICBcIkBkYlwiOiBmaWxlVVJMVG9QYXRoKFxuICAgICAgICBuZXcgVVJMKFwiLi9zcmMvcGx1Z2lucy9mYWtlLWFwaS9oYW5kbGVycy9cIiwgaW1wb3J0Lm1ldGEudXJsKVxuICAgICAgKSxcbiAgICAgIFwiQGFwaS11dGlsc1wiOiBmaWxlVVJMVG9QYXRoKFxuICAgICAgICBuZXcgVVJMKFwiLi9zcmMvcGx1Z2lucy9mYWtlLWFwaS91dGlscy9cIiwgaW1wb3J0Lm1ldGEudXJsKVxuICAgICAgKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNTAwMCxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogW1widnVldGlmeVwiXSxcbiAgICBlbnRyaWVzOiBbXCIuL3NyYy8qKi8qLnZ1ZVwiXSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTE3MyxcbiAgfSxcbiAgLy8gYmFzZTogJy91YXRhZG1pbicsXG5cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrYSxPQUFPLFNBQVM7QUFDbGIsT0FBTyxZQUFZO0FBQ25CLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQUEsRUFDRTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBQ1AsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxlQUFlO0FBZGtQLElBQU0sMkNBQTJDO0FBaUJ6VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQTtBQUFBLElBR1AsVUFBVTtBQUFBLE1BQ1IsY0FBYyxDQUFDLGNBQWM7QUFFM0IsZUFBTyx1QkFBdUIsU0FBUyxFQUNwQyxRQUFRLHFCQUFxQixPQUFPLEVBQ3BDLFlBQVk7QUFBQSxNQUNqQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLFFBQ1IsaUJBQWlCO0FBQUEsVUFDZixpQkFBaUIsQ0FBQyxRQUNoQixRQUFRLHNCQUFzQixRQUFRO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsSUFDWixPQUFPO0FBQUE7QUFBQSxJQUdQLFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBR0QsV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLHdCQUF3QixhQUFhLGdCQUFnQjtBQUFBLE1BQzVELEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUNULENBQUMsa0JBQWtCO0FBRWpCLGNBQUksa0JBQWtCO0FBQ3BCLG1CQUFPO0FBQUEsY0FDTCxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixJQUFJO0FBQUEsWUFDTjtBQUFBLFFBQ0o7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUE7QUFBQSxNQUdiLFFBQVEsQ0FBQyxjQUFjLFlBQVk7QUFBQSxJQUNyQyxDQUFDO0FBQUEsSUFFRCxVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxnQkFBZ0I7QUFBQSxRQUNkLElBQUksSUFBSSxvQkFBb0Isd0NBQWU7QUFBQSxNQUM3QztBQUFBLE1BQ0EsU0FBUyxjQUFjLElBQUksSUFBSSxlQUFlLHdDQUFlLENBQUM7QUFBQSxNQUM5RCxZQUFZLGNBQWMsSUFBSSxJQUFJLGtCQUFrQix3Q0FBZSxDQUFDO0FBQUEsTUFDcEUsV0FBVztBQUFBLFFBQ1QsSUFBSSxJQUFJLHdCQUF3Qix3Q0FBZTtBQUFBLE1BQ2pEO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxJQUFJLElBQUksd0JBQXdCLHdDQUFlO0FBQUEsTUFDakQ7QUFBQSxNQUNBLHlCQUF5QjtBQUFBLFFBQ3ZCLElBQUksSUFBSSxnREFBZ0Qsd0NBQWU7QUFBQSxNQUN6RTtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsSUFBSSxJQUFJLG9DQUFvQyx3Q0FBZTtBQUFBLE1BQzdEO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWixJQUFJLElBQUksaUNBQWlDLHdDQUFlO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTO0FBQUEsSUFDbkIsU0FBUyxDQUFDLGdCQUFnQjtBQUFBLEVBQzVCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBO0FBR0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
