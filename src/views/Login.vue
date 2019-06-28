<template>
  <div class="login">
      <LoginHeader></LoginHeader>
      <div class="login-contain">
        <div class="login-contain-left">
          <img style="margin-top: 5%" src="../assets/img/comp.png" alt="">
          <el-button @click="goTrade" type="primary" style="width: 25%;height: 12%; font-size: 16px; margin: 5% 10%; background:#2F5895;">点击进入资金交易</el-button>
          <el-button @click="goReg" type="primary" style="width: 25%;height: 12%; font-size: 16px;background:#2F5895;">5秒快速注册</el-button>
        </div>
        <div class="login-contain-right">
          <div class="login-contain-right-header">
            <div class="login-contain-right-header-left">
              使用账号密码登录
            </div>
          </div>
          <div class="login-contain-right-contain">
            <p>已有客户端、App账号，可以直接登录</p>
            <el-form id="parent" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item style="margin-top: 10%;width: 98%" prop="phone_number">
                <el-input
                  onkeyup = "value=value.replace(/[^\d]/g,'')"
                  v-model="ruleForm.phone_number"
                  placeholder="手机号"
                  maxlength="11"
                >
                </el-input>
              </el-form-item>
              <el-form-item style="margin-top: 10%;width: 98%" prop="password">
                <el-input style="width: 98%;" placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
              <el-button id="btn" type="warning" plain @click="submitForm('ruleForm')">登录</el-button>
            </el-form>

          </div>
          <div class="login-contain-right-footer">
              <p>还没有账号？点我 <router-link to="/reg">5秒注册</router-link></p>
              <router-link style="color: #000;" to="/forget">忘记密码</router-link>
          </div>
        </div>
      </div>
      <Footer></Footer>

  </div>

</template>

<script>
  import LoginHeader from  '../components/LoginHeader'
  import Footer from '../components/Footer'
  import axios from 'axios'
  import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data() {
          return {
            text: '',
            input: '',
            ruleForm: {
              phone_number: '',
              password: ''
            },
            rules: {
              phone_number: [
                { required: true, clearable:'true', message: '用户名不能为空！', trigger: 'blur'},
                {min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur'},
              ],
              password: [
                {  required: true,clearable:'true', message: '密码不能为空！', trigger: 'blur' }
              ],
            }
          };
        },
        methods:{
          ...mapActions(['loginAction']),
          submitForm(formName) {
            // console.log(this.ruleForm.phone_number + " "+ this.ruleForm.password);
            var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                if (!myreg.test(this.ruleForm.phone_number)) {
                  //console.log("请输入有效的手机号码！");
                  alert("请输入正确的手机号码！");
                  this.ruleForm.phone_number = '';
                }
                else{
                  var oParent = document.getElementById("parent");
                  var oBtn = document.getElementById("btn");
                  if(oBtn != null){
                    oParent.removeChild(oBtn);
                    var newnode = document.createElement("button");
                    newnode.innerHTML = "登录中";
                    newnode.style.width = "100%";
                    newnode.style.height = "46px";
                    newnode.style.marginTop = "26px";
                    newnode.style.letterSpacing = "1rem";
                    newnode.style.fontSize = "18px";
                    newnode.style.color = "red";
                    newnode.disabled = true;
                    newnode.style.borderRadius = "10px";
                    newnode.style.background = "orange";
                    newnode.style.opacity = "0.5";
                    oParent.appendChild(newnode);
                  }
                  axios({
                    url:'http://xm626.free.idcfengye.com/login?phone='+this.ruleForm.phone_number+'&password='+this.ruleForm.password,
                    method:'post',
                    data:{
                      phone_number:this.ruleForm.phone_number,
                      password:this.ruleForm.password
                    }
                  }).then(res => {
                    // console.log(res.data);
                    if(res.data.success == true){
                        alert("登录成功！");
                        this.loginAction(res.data.phone);
                        // console.log(res.data);
                        console.log(res.data.phone);

                      this.$router.push("/");
                    }
                    else{
                      alert("登录失败！");
                    }
                  }).catch(err => {
                    console.log(err);
                  });
                }
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          goTrade(){
            this.$router.push("/trade")
          },
          goReg(){
            this.$router.push("/reg")
          }
      },
        components:{
          LoginHeader,Footer
        }
    }
</script>

<style scoped lang="scss">
    #btn{
      text-align: center;
      width: 100%;
      margin-top: 10%;
      font-size: 18px;
      border:2px solid orange;
      letter-spacing: 2rem;
    }
    .login{
      margin: 10px auto;
      width: 1000px;
      &-contain{
        width: 100%;
        height:500px;
        border-top: 2px solid #2f5895;
        border-bottom: 2px solid #2f5895;
        background:url("../assets/img/bg.png");
        &-left{
          width: 65%;
          height:80%;
          float: left;
        }
        &-right{
          width: 30%;
          height:80%;
          float: right;
          background: #fff;
          margin-top: 5%;
          margin-right:3%;
          border-radius: 10px;
          &-header{
            height: 10%;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: red;
            line-height: 4rem;
          }
          &-contain{
            height: 67%;
            padding: 10px;
            border-bottom: 1px dashed #ccc;
            p{
              font-size: 12px;
              color: darkgray;
            }
          }
          &-footer{
            height:3rem;
            padding: 10px;
            p{
              font-size: 12px;
              color: darkgray;
              a{
                color: orange;
              }
            }
          }
        }


      }
  }
</style>
