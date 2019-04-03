$(function(){
//点击小图片，下方my-big中显示大图片
//1. 查找触发事件的元素
//2. 绑定事件
$(".my-small").mouseover(function(){
    //3. 查找要修改的元素
    //4. 修改元素
    //获得当前小图片身上的data-target属性值
    var src=$(this).attr("data-target");
    $(".my-big").prop({src:src});
              //.attr()
  })
})