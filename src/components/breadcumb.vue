<template>
  <div>
    <ul>
      <li v-for="(item, index) in lists" :key="index">
        <router-link :to="{ path: item.path }">{{ item.meta.title }}</router-link>
        <span v-if="index < lists.length - 1">/</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to, from);
      this.lists = to.matched;
    }
  }
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
}
</style>
