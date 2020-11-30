<template>
  <div style=" height: 44px; background-color: deepskyblue; display: flex; flex-direction: row">
    <div style="flex: 1">
      <i class="el-icon-picture" style="font-size: 40px">Project</i>
    </div>
    <div style="flex: 2">
    </div>
    <div style="flex: 1">
      <el-input v-model="input" placeholder="请输入内容" style="height: 40px; line-height: 40px; padding-top: 2px"></el-input>
    </div>
    <div style="flex: 1">
      <i class="el-icon-upload" style="font-size: 40px"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>

</style>
