<template>
  <div id="app">
    <div style="display: flex; flex-direction: row">
      <div style="width: 7%">
        <main-tab-bar></main-tab-bar>
      </div>
      <div style="width: 93%">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./views/components/Title";
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
import MainTabBar from "./components/mainTabBar/MainTabBar";

export default {
  name: 'App',
  components:{
    TabBar,
    Title,
    TabBarItem,
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
