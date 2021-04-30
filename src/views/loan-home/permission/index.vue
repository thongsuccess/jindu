<template>
  <div>
    <h3>vuex使用及modules化</h3>
    <div>权限值{{ perVal }}</div>
    <div>权限值-----{{ perVal11 }}</div>
    <div>去重---{{ unRepts }}</div>
    <a-button @click="changeEdit">改变权限值</a-button>
    <!-- <a-button @click="message">消息</a-button> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("permission", {
      perVal: state => state.perVal
    }),
    ...mapGetters("permission", {
      perVal11: "tarPerVal",
      unRepts: "unRep"
    })
  },
  mounted() {},
  methods: {
    // changeEdit() {
    ...mapActions("permission", {
      changeEdit: "changeEditPerVal"
    })
    // message() {
    //   console.log(123);
    // }
    // console.log(this.$store.commit("editPerVal"));
    // this.$store.commit("permission/editPerVal");
    // this.$store.dispatch("permission/changeEditPerVal");
    // }
  }
};
</script>

<style lang="scss" scoped></style>
