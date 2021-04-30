<template>
  <div class="wrapepr-loan-input">
    <a-form layout="inline" :form="form">
      <a-form-item>
        <a-input v-decorator="['name']" placeholder="请输入姓名"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['indentity_card']"
          placeholder="请输入身份证"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['birthday']"
          placeholder="请输入出生日期"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['sex']" placeholder="性别"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['marriage']" placeholder="婚姻状态"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['education']" placeholder="教育状态"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['address1']" placeholder="居住地址"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['address2']" placeholder="户籍地址"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['phone']" placeholder="居住电话"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['mobile_phone']" placeholder="手机号"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['company']" placeholder="现职公司全称"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['trade']" placeholder="所属行业"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['position']" placeholder="职位"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['address3']" placeholder="公司地址"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['company_type']"
          placeholder="公司类型"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['company_email']"
          placeholder="公司邮箱"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['company_phone']"
          placeholder="公司电话"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['income']" placeholder="收支情况"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact']" placeholder="关系1"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact_name']" placeholder="姓名"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact_phone']" placeholder="手机"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact2']" placeholder="关系2"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact2_name']" placeholder="姓名"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact2_phone']" placeholder="手机"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['ontact2_dep']" placeholder="部门"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['contact2_pos']" placeholder="职位"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['remark']" placeholder="备注"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submitForm">提交</a-button>
        <a-button @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { loanCreate } from "@/api/loan.js";

export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    submitForm() {
      this.form.validateFields((err, values) => {
        loanCreate(values).then(res => {
          console.log(res);
        });
      });
    },
    resetForm() {
      this.form.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped></style>
