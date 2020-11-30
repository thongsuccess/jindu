<template>
  <div class="home">
    <div>今日</div>
    <div>{{toDay}}</div>
    <div>本周</div>
    <div>{{weekDate}}</div>
    <div>本月</div>
    <div>{{monthFirst}}~{{monthLast}}</div>
  </div>
</template>

<script src="./index.js">

</script>
<style lang="less" scoped>
  div {
    cursor: pointer;
  }
</style>
