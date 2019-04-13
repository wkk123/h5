<template>
  <div class="login" :style="{backgroundImage:'url('+require('./../assets/image/pc.jpeg')+')'}">
    <div class="login_top">
      <div class="left top_logo">
        <img src="./../assets/image/logo.png" alt="">
      </div>
      <div class="left top_title">
        <div class="title_top">随行旅行</div>
        <span class="top_buttom">你我一起随行</span>
      </div>
      <div class="right top_btn">注册</div>
    </div>
    <div class="login_center">
      <div class="center_login">
        <div class="center_title">
          <div class="title_top">随行旅游登录</div>
          <span class="title_bottom">你我一起随行</span>
        </div>
        <div class="center_input">
          <div class="input_item clearfix">
            <img class="item_icon left" src="./../assets/image/2.png" alt="icon">
            <input class="item_input left" placeholder="请输入手机号" type="tel" name="" id="">
          </div>
          <div class="input_item clearfix">
            <img class="item_icon left" src="./../assets/image/1.png" alt="icon">
            <input class="item_input left" placeholder="请输入密码" type="password" name="" id="">
          </div>
          <div class="input_item clearfix">
            <div class="left">没有账号？注册</div>
            <div class="right">忘记密码</div>
          </div>
        </div>
        <div class="center_btn">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.left {
  float: left;
}
.right {
  float: right;
}
.login {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-size:100% 100%;  
  .login_top {
    width:calc(100% - 380px);
    height:38px;
    padding:6px 190px;
    background-color:rgba(255,255,255,0.3);
    .top_logo {
      width:44px;
      height:38px;
      img {
        width:100%
      }
    }
    .top_title {
      width:100px;
      height:auto;
      margin-top:2px;
      margin-left:2px;
      .title_top {
        color:#333333;
        font-size:14px; 
        font-weight:500; 
        letter-spacing:6px
      }
      .top_buttom {
        color:#666666;
        letter-spacing:6px
      }
    }
    .top_btn {
      width:65px;
      height:25px;
      margin-top:6px;
      border-radius :25px;
      background-color:#2597f2;
      text-align:center;
      line-height:25px;
      font-size:14px;
      color:#fff;
      font-weight:400;  
      cursor:pointer; 
    }
  }
  .login_center {
    width:275px;
    height:auto;
    border:1px solid #d0d0d0;
    border-radius:10px;
    background-color:rgba(255,255,255,0.9); 
    margin-top:78px;
    margin-left:198px;
    .center_login {
      width:170px;
      margin:35px auto;
      .center_title {
        .title_top {
          color:#333333;
          font-size:20px;
          letter-spacing:6px; 
        }
        .title_bottom {
          color:#666666;
          letter-spacing:6px; 
        }
      }
      .center_input {
        margin-top:24px;
        .input_item {
          width:100%;
          height:28px;
          border-bottom:1px solid #b9b9b9;
          padding-top:17px; 
          &:last-child{
            padding-top:9px;
            color:#666666;
            border:0;
          }
          .item_icon {
            width:15px;
            height:15px;
            margin:7px 5px;
            float: left;
          }
          .item_input {
            float: left;
            width:calc(100% - 15px - 10px);
            height:28px;
            padding:0;
            margin:0;
            border:0;
            background:transparent;
            outline:none; 
            font-size:12px;
            color:#666666;
          }
        }
      }
      .center_btn {
        margin-top:24px;
        width:100%;
        height:30px;
        line-height:30px;
        text-align:center;
        font-size:14px;
        font-weight:400; 
        color:#ffffff; 
        background-color:#2597f2;
        border-radius: 30px;
        cursor:pointer;
      }
    }
  }
}
</style>
