<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">
        <div class="logo"></div>
      </div>
      <el-form class="login-form" ref="login-form" :model="user" :rules="formRules">
        <el-form-item prop="mobile">
          <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="user.agree"
          >我已阅读并同意用户协议和隐私条款
          </el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="onSubmit"
            :loading="loginLoading"
          >登录
          </el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/user'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810',
        agree: false// 验证码
      },
      loginLoading: false,
      formRules: { // 表单验证规则配置
        // 要验证的数据名称：规则列表[]
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'change'
          },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: '请输入正确的号码格式',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空',
            trigger: 'change'
          },
          {
            pattern: /^\d{6}$/,
            message: '请输入正确的验证码格式'
          }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            // message: '请勾选同意用户协议',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['login-form'].validate(valid => {
        // 如果表单验证失败，停止请求提交
        if (!valid) {
          return
        }
        // 验证通过，请求登录
        this.userLogin()
      })
    },
    // 登录函数
    userLogin () {
      this.loginLoading = true
      login(this.user).then(res => {
        // console.log(res)
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        if (res.status === 201) {
          this.$router.push('/')
        }
        // 关闭 loading
        this.loginLoading = false
        // 登录成功
      }).catch(err => {
        console.log('登录失败', err)
        this.$message.error('登录失败，手机号或验证码错误')
        // 关闭 loading
        this.loginLoading = false
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('../../assets/imgs/login_bg.jpg') no-repeat;
    background-size: cover;

    .login-form-wrap {
      min-width: 300px;
      padding: 30px 50px 10px;
      background-color: #fff;

      .login-head {
        display: flex;
        justify-content: center;

        .logo {
          width: 200px;
          height: 57px;
          background: url('../../assets/imgs/logo_index.png') no-repeat;
          background-size: contain;
        }
      }

      .login-form {
        .login-btn {
          width: 100%;
        }
      }
    }
  }
</style>
