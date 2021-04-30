<template>
  <div>
    首页
    {{ aa }}
    <form id="uploadForm" enctype="multipart/form-data">
      文件:<input id="file" type="file" name="file" />
    </form>
    <button id="upload" @click="upload">上传文件</button>
    <h1 ref="h1s">我是refs值</h1>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      aa: 10
    };
  },
  beforeCreate() {
    // beforeCreate 创建前：实例和方法还没初始化完成 undefined
    // console.log(this.aa);
  },
  created() {
    // created 创建后：实例和方法创建完成 可以拿到data中的结果
    // console.log(this.aa);
    // const div = this.$refs.h1s;
    this.$nextTick(() => {
      console.log(this.$refs.h1s.innerHTML);
    });
  },
  beforeMount() {
    // beforeMount 挂载前：模板编译完成，但还没把模板渲染到页面上
    // console.log(this.aa);
  },
  mounted() {
    // mounted 挂载后：模板编译完成，用户已经可以看到渲染好的页面了
    // console.log(this.aa);
    // var formData = new FormData($('#uploadForm')[0]);
    let arr = [9, 2, 4, 2];
    // every方法所有都满足才返回true
    // let res = arr.every(item => {
    //   return item > 1;
    // });
    let res = arr.some(item => {
      // some方法只要其中一个满足就返回true
      return item > 10;
    });
    console.log(res);
  },
  methods: {
    upload() {
      let formData = new FormData();
      let files = $("#file")[0].files[0];
      formData.append("file", files);
      $.ajax({
        type: "post",
        headers: {
          identitytoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVDEifQ.eyJleHAiOjE2MTc4NTg0MjgsInVzZXJJZCI6Ild1aGFpcm9uZyIsInByb3BzIjoiIn0.w6qCNiuyJS5jGKnTM8vwK76dOZgqwd2Lmv4UGJ4DZ_4"
        },
        url: "http://172.18.1.104:90/devops/rest/oa/OaZenTaoRest/dataImport", //上传文件的请求路径必须是绝对路劲
        data: formData,
        cache: false,
        processData: false,
        contentType: false,
        success: function(res) {
          console.log(res);
        },
        error: function(err) {
          console.log(err);
        }
      });
    }
  },
  beforeUpdate() {
    // beforeUpdate 更新前：模板和数据尚未保持同步(页面是旧数据，但data里是最新数据)
    // console.log(this.aa, "beforeUpdate");
  },
  updated() {
    // updated 更新后：模板和数据保持同步
    // console.log(this.aa);
  },
  beforeDestroy() {
    // beforeDestory 销毁前：在这之前，实例仍可调用(在此清除定时器，事件绑定等)
    // console.log(this.aa);
  },
  destroyed() {
    // destoryed 销毁后：vue实例所指的全部东西都会解绑，所有事件监听器都会移除，子实力也会
    // console.log(this.aa);
  }
};
</script>
