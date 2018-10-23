<template>
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  >
   <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">売上予測・要因分析</el-menu-item>
  <el-menu-item index="3">ファイル登録</el-menu-item>
  <el-menu-item index="4">予測案件登録</el-menu-item>
  <el-menu-item index="5">予測案件実行</el-menu-item>
  <el-menu-item index="6">企業情報</el-menu-item>
  <el-menu-item class="el-menu-nav-custom-right" index="7">戻る</el-menu-item>
  <el-menu-item class="el-menu-nav-custom-right" index="8">abc001@tkzc.co.jp</el-menu-item>
</el-menu>
</template>

<script src="./NavMenu.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./NavMenu.scss";
</style>