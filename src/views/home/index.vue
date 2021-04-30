<template>
  <div class="home">
    <div>今日</div>
    <div>{{ toDay }}</div>
    <div>本周</div>
    <div>{{ weekDate }}</div>
    <div>本月</div>
    <div>{{ monthFirst }}~{{ monthLast }}</div>
    <div class="ass" data-clipboard-text="点击" @click="copy('ass')">复制</div>
    <h1>
      全选

      <input type="checkbox" v-model="allCheck" @change="handleAllCheck" />
    </h1>
    <div v-for="(item, i) in checklist" :key="i">
      <span>{{ item.name }}</span>
      <input type="checkbox" v-model="item.check" @change="curHandleCheck" />
    </div>
    <input type="radio" name="radio" />男 <input type="radio" name="radio" />女
    <ul>
      <li v-for="(item, index) in aa" :key="index">
        <a @click="n = index">{{ n }},{{ index }} ===={{ item.path }}</a>
        <ul v-if="n == index">
          <li v-for="(aitem, aindex) in item.content" :key="aindex">
            <a>{{ aitem.path }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"></script>
<style lang="less" scoped>
div {
  cursor: pointer;
}
</style>
