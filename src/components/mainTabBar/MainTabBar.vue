<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../../assets/img/tabbar/tesk.svg" alt="">
      <img slot="item-icon_active" src="../../assets/img/tabbar/tesk_active.svg" alt="">
      <div slot="item-text">任务信息</div>
    </tab-bar-item>
    <tab-bar-item path="/tesk">
      <img slot="item-icon" src="../../assets/img/tabbar/work.svg" alt="">
      <img slot="item-icon_active" src="../../assets/img/tabbar/work_active.svg" alt="">
      <div slot="item-text">工作管理</div>
    </tab-bar-item>
    <tab-bar-item path="/system">
      <img slot="item-icon" src="../../assets/img/tabbar/system.svg" alt="">
      <img slot="item-icon_active" src="../../assets/img/tabbar/system_active.svg" alt="">
      <div slot="item-text">系统设置</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon_active" src="../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">待开发</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
