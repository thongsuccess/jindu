<template>
  <a-layout>
    <a-layout-sider>
      <a-menu mode="inline" :default-selected-keys="['/']" style="height: 100%">
        <a-menu-item key="/">
          <router-link to="/loan-home">
            <a-icon type="user" />
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/loan-input">
          <router-link to="/loan-input">
            <a-icon type="user" />
            <span>贷款申请</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="loan-approve">
          <router-link to="/loan-approve">
            <a-icon type="user" />
            <span>贷款审批</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="about2">
          <router-link to="/about2">
            <a-icon type="user" />
            <span>申请管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="about3">
          <router-link to="/about3">
            <a-icon type="user" />
            <span>标的管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="permission">
          <router-link to="/permission">
            <a-icon type="user" />
            <span>权限管理</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-button @click="loginout">退出登陆</a-button>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script>
import { removeToken } from "@/utils/token.js";
import { logout } from "@/api/login.js";
export default {
  methods: {
    loginout() {
      logout().then(res => {
        removeToken();
        if (res.data.code === 20000) {
          this.$message.warning(res.data.message);
          this.$router.push("/login");
        } else {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style lang="less">
.ant-layout-header {
  background: #2f75dd;
  color: #fff;
}
</style>
