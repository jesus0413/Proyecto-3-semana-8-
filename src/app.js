import router from "./router";
//import styleglobal from "src/assets/css/styleglobal.css";


window.addEventListener("load",router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
