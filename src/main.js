import { createApp } from "vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-plus";
import "element-plus/theme-chalk/index.css";
import App from "./App.vue";

// createApp.use(ElementUI);

createApp(App).use(ElementUI).use(store).use(router).mount("#app");
