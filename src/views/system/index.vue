<template>
  <div class="main-system">
    <div class="system-top">
      <ol>
        <li>
          <span>角色</span>
        </li>
        <li>
          <span>用户</span>
        </li>
      </ol>
    </div>
    <div class="system-bottom">
      <!-- <router-view></router-view> -->
    </div>
    <h2>{{ num }}</h2>
    <h2>{{ GetNum }}</h2>
    <Button @click="ADD">增加</Button>
    <Button @click="DEL">减少</Button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["num"]),
    ...mapGetters(["GetNum"])
  },
  methods: {
    ...mapActions(["ADD", "DEL"])
  }
  // methods: {
  //   changeAdd() {
  //     // this.$store.commit("add");
  //     this.$store.dispatch("ADD");
  //   },
  //   changeDel() {
  //     // this.$store.commit("del");
  //     this.$store.dispatch("DEL");
  //   }
  // }
};
</script>
