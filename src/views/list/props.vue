<template>
  <div>
    <a-button>{{ total }}</a-button>
    <ul>
      <li @click="handleParnet">子父传值</li>
    </ul>
    <Empty></Empty>
  </div>
</template>

<script>
import { Empty } from "ant-design-vue";

export default {
  components: {
    Empty
  },
  props: ["total"],
  data() {
    return {};
  },
  methods: {
    handleParnet() {
      //   console.log(this);
      this.$emit("handleToPropsA");
    }
  }
};
</script>

<style lang="scss" scoped></style>
