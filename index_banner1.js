$(function(){
    //单击图片，切换下一张
    //1.查找触发事件的元素
    //2.绑定事件处理函数
    $("#img-1").click(function(){
        //3.查找要修改的元素
        var $img=$(this);
        //4.修改元素
        //获得当前图片的alt属性值，转为整数1
        var i=parseInt($img.attr("alt"));
        if(i<4) //如果i没到4
          i++; //就可以继续+1
        else //否则(i==4)
          i=1; //就回到1
        //同时修改img的src和alt为新值
          $img.attr({
          src:`img/${i}.jpg`,
          alt:i
        });
      })
  
})