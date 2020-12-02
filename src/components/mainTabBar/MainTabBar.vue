<template>
  <tab-bar>
    <div slot="main">
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/tabbar/inf.svg" alt="">
        <img slot="item-icon_active" src="../../assets/img/tabbar/inf_active.svg" alt="">
        <div slot="item-text">任务</div>
      </tab-bar-item>
      <tab-bar-item path="/tesk">
        <img slot="item-icon" src="../../assets/img/tabbar/work.svg" alt="">
        <img slot="item-icon_active" src="../../assets/img/tabbar/work_active.svg" alt="">
        <div slot="item-text">工作</div>
      </tab-bar-item>
      <tab-bar-item path="/system">
        <img slot="item-icon" src="../../assets/img/tabbar/address.svg" alt="">
        <img slot="item-icon_active" src="../../assets/img/tabbar/address_active.svg" alt="">
        <div slot="item-text">通讯录</div>
      </tab-bar-item>
    </div>
    <div slot="minor">
      <tab-bar-item path="/success">
        <img slot="item-icon" src="../../assets/img/tabbar/success.svg" alt="">
        <img slot="item-icon_active" src="../../assets/img/tabbar/success_active.svg" alt="">
        <div slot="item-text">完成</div>
      </tab-bar-item>
      <tab-bar-item path="/build">
        <img slot="item-icon" src="../../assets/img/tabbar/build.svg" alt="">
        <img slot="item-icon_active" src="../../assets/img/tabbar/build_active.svg" alt="">
        <div slot="item-text">新建</div>
      </tab-bar-item>
    </div>
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
