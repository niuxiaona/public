$(function(){
    //如果多个子元素绑定相同的事件时，都要利用冒泡
      //事件绑定在父元素上一次，所有子元素共用
      //2大难题
        //1.this 要换成e.target
        //2.判断e.target是否想要的
        $("ul.tabs").click(function(e){
            var $a=$(e.target);
            if($a.is("li")){
              //将当前li添加class active
              $a.addClass("actt")
              //return $当前li
              //将当前li之外的其余li去掉class active
              .siblings().removeClass("actt")
            }
          })
})
