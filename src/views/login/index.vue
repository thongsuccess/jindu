<template>
  <div class="login-wrapper">
    <a-form :form="form" class="ant-form">
      <a-row>
        <a-col :span="24">
          <a-form-item>
            <a-input
              v-decorator="['account', validatorRules.userName]"
              placeholder="请输入用户名"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item>
            <a-input
              v-decorator="['password', validatorRules.passWord]"
              type="password"
              placeholder="请输入密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item>
            <a-button type="primary" @click="submitForm">登陆</a-button>
            <a-divider type="vertical" />
            <a-button @click="resetForm">重置</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
//  :labelCol="labelCol" :wrapperCol="wrapperCol"
import { login } from "@/api/login.js";
import { setToken } from "@/utils/token.js";
export default {
  data() {
    return {
      // labelCol: {
      //   xs: { span: 24 },
      //   sm: { span: 5 }
      // },
      // wrapperCol: {
      //   xs: { span: 24 },
      //   sm: { span: 16 }
      // },
      form: this.$form.createForm(this)
    };
  },
  computed: {
    validatorRules() {
      return {
        userName: {
          rules: [
            {
              required: true,
              message: "please in the username"
            }
          ]
        },
        passWord: {
          rules: [
            {
              required: true,
              message: "please in the password"
            }
          ]
        }
      };
    }
  },
  methods: {
    submitForm() {
      this.form.validateFields((err, values) => {
        login(values)
          .then(res => {
            if (res.data.code === 20000) {
              this.$message.success(res.data.message);
              setToken(res.data.data.token);
              setTimeout(() => {
                this.$router.push("/dashboard");
              }, 1500);
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    resetForm() {
      this.form.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3794068505,30178228&fm=26&gp=0.jpg")
    no-repeat 100% center;
  background-size: 100%;
}
.ant-form {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
