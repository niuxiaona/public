$(function(){
     //正确时，使用图片:"<img src='img/ok.png'>"
    //姓名错误时: "<img src='img/err.png'>用户名必须介于3~9位之间!"
    //密码错误时: "<img src='img/err.png'>密码必须介于6~8位之间!"
    //阻止默认行为: e.preventDefault();
    //表单提交: $(form).submit();
    $(":text").blur(function(){
        vail(this,5,9,"用户名在5~9位之间!");
      })
      function vail(txt,min,max,msg){
        var $txt=$(txt); //获得当前文本框对象；
        //根据不同条件，设置$txt的内容为不同的值
        $txt.next().html(function(){
          //获得当前文本框内容的长度
          var length=$txt.val().length;
          //如果内容的长度在3~9位之间
          if(length>=min&&length<=max){
            //就设置文本框的下一个兄弟元素的内容为正确的HTML片段
            return `<img src='img/ok.png'>`
          }else{ //否则，就设置文本框的下一个兄弟元素的内容为错误的html片段
            return `<img src='img/err.png'>${msg}`
          }
        })
      }
      $(":password").blur(function(){
        vail(this,6,8,"密码在6~8位之间!");
      })
      $(":tel").blur(function(){
        vail(this,11,11,"手机号输入11位!");
      })
})