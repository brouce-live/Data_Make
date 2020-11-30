<template>
  <div id="app">
    <Title />
    <div style="display: flex; flex-direction: row">
      <div style="flex: 1">
        <main-tab-bar></main-tab-bar>
      </div>
      <div style="flex: 10">
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
