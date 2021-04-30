<template>
  <div>
    <ul>
      <li>首页</li>
      <li>导航</li>
      <li @click="handleToDetail">详情</li>
      <li @click="handleToProps">父子传值</li>
    </ul>
    <ViewEmpty :total="total" :handleToPropsA="handleToProps"></ViewEmpty>
  </div>
</template>

<script>
import ViewEmpty from "./props.vue";
import Bus from "./bus.js";

export default {
  components: {
    ViewEmpty
  },
  data() {
    return {
      total: 1,
      color: "red"
    };
  },
  mounted() {
    // console.log(Bus);
  },
  methods: {
    // handleBus() {
    //   console.log("兄弟传值");
    // },
    handleToDetail() {
      Bus.$emit("handleBus", "兄弟传值");
      this.$router.push("/detail");
    },
    handleToProps() {
      this.total++;
    }
  }
};
</script>

<style lang="scss" scoped></style>
