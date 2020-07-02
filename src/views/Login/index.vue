<template>
  <div id="login">
      <div class="login-wrap">
          <ul class="menu-tab">
              <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
          </ul>
          <!--表单 start-->
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="medium">

              <el-form-item  prop="username" class="item-form">
                  <label>邮箱</label>
                  <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item  prop="password" class="item-form">
                  <label>密码</label>
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item  prop="code" class="item-form">
                  <label>验证码</label>
                  <el-row :gutter="10">
                      <el-col :span="15">
                          <el-input v-model.number="ruleForm.code"></el-input>
                      </el-col>
                      <el-col :span="9">
                          <el-button type="success" class="block">获取验证码</el-button>
                      </el-col>
                  </el-row>
              </el-form-item>

              <el-form-item>
                  <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
              </el-form-item>
          </el-form>
          <!--表单 end-->
      </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            let checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            let validatePass = (rule, value, callback) => {
                console.log("password")
                let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z]{2,4}$/;
                if (value === '') {
                    callback(new Error('请输入用户名'));
                }else if(!reg.test(value)){
                    callback(new Error('用户名格式有误'));
                }
                else {
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                menuTab:[
                    {txt:"登陆", current: true},
                    {txt:"注册", current: false}
                ],
                ruleForm: {
                    username: '',
                    password: '',
                    code: ''
                },
                rules: {
                    username: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    code: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
        },
        mounted() {
        },
        //写函数的部分
        methods: {
            //vue数据驱动视图渲染
            toggleMenu(data){
                this.menuTab.forEach((elem, index)=> {
                   elem.current = false;
                });
                //高光
                data.current = true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
#login{
    height: 100vh;//vh  根据屏幕适屏
    background-color: #344a5f;
}
.login-wrap {
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li{
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
}
.current {
    background-color: rgba(61, 61, 61, 0.74);
}
.login-form {
    margin-top: 29px;
    label {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #fff;
    }
    .item-form{ margin-bottom: 13px}
    .block{
        display: block;
        width: 100%;
    }
    .login-btn{
        margin-top: 19px;
    }
}

</style>
