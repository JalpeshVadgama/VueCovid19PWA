<template>
  <div class="page-container">
    <md-app class="app-wrapper" md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ Title }}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">
              <router-link to="/">Home</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon style="font-weight:bold !important">trending_up</md-icon>
            <span class="md-list-item-text">
              <router-link to="/States">States</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>info</md-icon>
            <span class="md-list-item-text">
              <router-link to="/AboutUs">About Us</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="container">
          <router-view></router-view>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import store from "./Store/store";
import { mapState } from "vuex";
export default {
  name: "app",
  data: () => ({
    menuVisible: false,
    Title: "Covid 19 India Dashboard"
  }),
  mounted() {
    this.$store.dispatch("loadData");
  }
};
</script>

<style scoped>
.md-app {
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.app-wrapper {
  min-height: 100vh;
}
</style>
