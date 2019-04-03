 //起始时，默认显示第一个div的内容
 document.getElementById("content1").style.zIndex=9;
 //1.查找触发事件的元素
 var tabs=document.querySelectorAll("[data-toggle=tab]");
 var n=10; //用来递增z-index的值
 //2.绑定事件处理函数
 for(var tab of tabs){
   tab.onclick=function(){
     var tab=this;
     //3.查找要修改的元素
     //先获取保存在当期tab上的目标div的id
     var id=tab.getAttribute("data-target");
           //tab.dataset.target;
     //再用id查找对应的div
     var content=document.getElementById(id);
     //4.修改元素
     //<div style="z-index:10">
     //所有带-的css属性，都要去-变驼峰
     content.style.zIndex=n;
     n++;
   }
 }