<template>
  <div class="main">
    <div class="main-left">
      <ul>
        <!-- <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/system">系统管理</router-link>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
        </li>
        <li>
          <router-link to="/list">人间惊鸿客</router-link>
        </li> -->
        <li v-for="(item, index) in routers" :key="index">
          <router-link class="active" :to="item.path">{{
            item.name
          }}</router-link>
          <ol>
            <li v-for="(item, cindex) in item.children" :key="cindex">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <div class="main-right">
      <!-- <keep-alive v-if="$route.meta.keepAlive"> -->
      <breadcumb />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import routers from "@/utils/routes.json";
import breadcumb from "./breadcumb.vue";

export default {
  components: {
    breadcumb
  },
  data() {
    return {
      routers: routers
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  display: flex;
}
.main-left {
  width: 300px;
  margin-right: 20px;
  ul {
    li {
      border-bottom: 1px solid #000;
    }
  }
}

.main-right {
  width: 100%;
  margin-right: 20px;
}
.active {
  color: orange;
}
</style>
