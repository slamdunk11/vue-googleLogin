import Vue from "vue";
import App from "./App.vue";
import GAuth from "vue-google-oauth2";

Vue.config.productionTip = false;

// app.use(GAuth, {
//   clientId: process.env.VUE_APP_OAUTH_CLIENT, // 아까 .env 파일에 저장해둔 그것임
//   scope: "profile email https://www.googleapis.com/auth/plus.login",
// });

const gauthOption = {
    clientId: process.env.VUE_APP_OAUTH_CLIENT,
    scope: "profile email https://www.googleapis.com/auth/plus.login",
};
Vue.use(GAuth, gauthOption);

new Vue({
    render: (h) => h(App),
}).$mount("#app");