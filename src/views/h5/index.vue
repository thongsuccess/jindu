<template>
  <div class="shopMall">
    <div class="shopDetail">
      商品列表
    </div>
    <div class="shopList">
      <div class="item" v-for="(item, index) in dataSource" :key="index">
        <div class="logo">
          <!-- <img :src="item.url" alt="" /> -->
          <img src="@/assets/1.jpg" alt="" />
        </div>
        <div class="des">
          <div class="name">
            <div class="title">{{ item.name }}</div>
            <div class="price">￥{{ item.price }}</div>
          </div>
          <div class="counts">
            <!-- <div class="minus" @click="handleMinus(index)">-</div> -->
            <span class="count" v-show="item.count >= 1">{{ item.count }}</span>
            <div class="add" @click="handleAdd(index)">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">购物⻋</div>
      <div class="priceTotal">￥{{ total }}</div>
      <div class="operation">
        <div class="clean" @click="handleClean">清空</div>
        <div class="settlement">结算</div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import "./index.less";
</style>
