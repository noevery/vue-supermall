<template>

    <div class="login">
      <div class="login-logo">
        <img src="@/assets/img/profile/user.png" alt="" class="logo-user">
      </div>
      <div class="login-register">
        <p>登录/注册</p>
        <div class="reg-bottom" >
          <img src="@/assets/img/profile/phone.png" alt="" class="icon-phone">
          <p>暂未绑定手机号</p>
        </div>
      </div>
      <div class="login-right">
        <img alt="" src="@/assets/img/profile/arrow_right.png" class="icon-forward" />
      </div>
    </div>

</template>

<script>
  export default {
    name: "ProfileLogin",
  }
</script>

<style scoped>
  .login {
    display: flex;
    align-items: center;
    height: 90px;
    background-color: var(--color-tint);
  }
  .login-logo {
    margin-left: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
  }
  .logo-user {
    width: 100%;
  }
  .login-register {
    margin-left: 20px;
    color: #fff;
  }
  .reg-bottom {
    display: flex;
    font-size: 14px;
    margin-top: 7px;
  }
  .reg-bottom > p {
    padding-left: 3px;
  }
  .icon-phone {
    display: block;
  }
  .login-right {
    position: absolute;
    right: 30px;
  }
  .icon-forward {
    width: 25px;
  }
</style>