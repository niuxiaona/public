var pop=document.getElementById("pop");
		//定义开关变量，用于控制图片是否跟随鼠标移动
		var canMove=false;
		//定义变量在开始拖拽是，就保存鼠标距div左上角的相对位置
		var offsetX,offsetY;
		//当在pop上按下鼠标时
		pop.onmousedown=function(e){
			canMove=true; //就可以拖拽
			//开始拖拽时，立刻获得鼠标距图片左上角的相对位置
			offsetX=e.offsetX;
			offsetY=e.offsetY;
		}
		//当鼠标在窗口中移动时
		window.onmousemove=function(e){
			//只有当pop可以移动时
			if(canMove==true){
				//才让pop跟随鼠标移动
				//求pop的top和left
				var left=e.clientX-offsetX;
				var top=e.clientY-offsetY;
				//设置pop的top和left属性;
				pop.style.left=left+"px";
				pop.style.top=top+"px";
			}
		}
		//当在pop上抬起鼠标按键时
		pop.onmouseup=function(){
			canMove=false;  //停止拖拽
		}
