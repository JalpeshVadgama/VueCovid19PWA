import AboutUs from "@/components/AboutUs";
import Home from "@/components/Home";
import States from "@/components/States";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/AboutUs",
      name: "AboutUs",
      component: AboutUs
    },
    {
      path: "/States",
      name: "States",
      component: States
    }
  ]
});
