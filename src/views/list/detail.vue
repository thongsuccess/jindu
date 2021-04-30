<template>
  <div>
    需求
    <ul>
      <li @click="bbtn">bus</li>
    </ul>
  </div>
</template>

<script>
import Bus from "./bus.js";

export default {
  data() {
    return {};
  },
  created() {
    // this.bbtn();
  },
  mounted() {
    Bus.$on("handleBus", val => {
      console.log(val);
    });
  },
  methods: {
    bbtn: function() {}
  }
};
</script>

<style lang="scss" scoped></style>
