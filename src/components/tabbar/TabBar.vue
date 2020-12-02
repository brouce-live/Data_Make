<template>
  <div id="tab-bar">
    <div style="flex: 7">
      <div style="margin-bottom: 10px;">
        <div>
          <el-dropdown class="avatar-container" trigger="click">
            <div>
              <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 80px; height: 80px; margin-left: 30px; margin-top: 10px">
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <router-link to="/">
                <el-dropdown-item>
                  Home
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <span style="margin-left: 45px; font-size: 18px">闵思诗</span>
      </div>
      <slot name="main"></slot>
    </div>
    <div style="flex: 3">
      <slot name="minor"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  methods:{
    logout(){
      window.open('http://localhost:8080',"_blank")
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
