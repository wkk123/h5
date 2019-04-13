<template>
  <div class="container">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="login_box">
      <div class="login_logo">
        <div class="logo_box">
          <img class="logo_img" src="./../assets/img/logo2.jpeg" alt="logo">
        </div>
        <span class="logo_title">随行旅游</span> 
      </div>
      <div class="login_center">
        <div class="list_box">
          <div class="list_item clearfix">
            <img class="item_icon" src="./../assets/img/2.png" alt="phone">
            <input class="item_input" placeholder="请输入手机号码" type="tel" name="" id="">
          </div>
          <div class="list_item clearfix">
            <img class="item_icon" src="./../assets/img/1.png" alt="suo">
            <input class="item_input" placeholder="请输入手机密码" type="password" name="" id="">
          </div>
          <div class="login_btn">登录</div>
          <div class="login_text clearfix">
            <div class="text_left">没有账号？注册</div>
            <div class="text_right">忘记密码</div>
          </div>
          <div class="login_title clearfix">
            <div class="login_wire"></div>
            <div class="title_text">第三方登录</div>
            <div class="login_wire"></div>
          </div>
          <div class="logo_box clearfix">
            <div class="logo_item">
              <img src="./../assets/img/wx.png" alt="logo">
            </div>
            <div class="logo_item">
              <img src="./../assets/img/qq.png" alt="logo">
            </div>
            <div class="logo_item">
              <img src="./../assets/img/wb.png" alt="logo">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  computed: {

  },
  async mounted () {
    
  },

  methods: {

    pay () {
    }
  },

  watch: {

  }
}
</script>
<style scoped lang="stylus">
  .login_box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:red;
    .login_logo {
      width:85px;
      height:auto;
      text-align:center;
      margin:0 auto;
      margin-top:85px;
      .logo_box {
        width:75px;
        height:75px;
        padding:5px;
        background:#ffffff;
        border-radius:50%; 
        overflow hidden
        .logo_img {
          display:block; 
          width:100%;
          height:100%;
          border-radius:50%; 
        }
      } 
      .logo_title {
        display:block;
        width:100%;
        height:30px;
        text-align:center;
        line-height:30px;
        color:#ffffff;   
      }
    }
    .login_center {
      width:268px;
      height:auto;
      margin:0 auto;
      margin-top:40px;
      .list_box{
        .list_item {
          width:100%;
          height:34px;
          border-bottom:1px solid #dddddd;
          padding-top:18px; 
          .item_icon {
            width:18px;
            height:18px;
            margin:7px 5px;
            float: left;
          }
          .item_input {
            float: left;
            width:calc(100% - 18px - 10px);
            height:34px;
            padding:0;
            margin:0;
            border:0;
            background:transparent;
            outline:none; 
            font-size:18px;
            color:#666666;
          }
        }
        .login_btn {
          width:100%;
          height:34px;
          text-align:center;
          font-size:18px;
          color:#ffffff;
          line-height:34px;
          background:#439de5;
          border-radius:17px; 
          margin-top:30px;
          border:1px solid #439de5;
        }
        .login_text {
          font-size:14px;
          color:#999999;
          padding:10px 2px;
          .text_left {
            float: left;
          }
          .text_right {
            float: right;
          }
        }
        .login_title {
          margin-top:40px;
          wdith:100%;
          height:24px;
          line-height:24px;
          .login_wire {
            width:calc((100% - 80px)/2);
            border-top:1px solid #999999;
            float: left;
            margin-top:11px;
          }
          .title_text {
            width:80px;
            text-align:center; 
            color:#999999;
            float: left;
          }
        }
        .logo_box {
          width:100%;
          height:auto;
          background:green;
          margin-top:30px;
          .logo_item {
            width:80px;
            height:80px;
            float:left;
            margin:0 calc((100% - 240px)/6);
            img {
              width:100%;
              height:auto; 
            }
          }
        }
      }
    }
  }
</style>
