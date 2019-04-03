var container=document.querySelector(".container");
var v3=document.getElementById("v3");
var ctr1=document.querySelector(".ctr1");
var img=document.querySelector(".ctr1 img");
container.onmouseenter=function(){
    ctr1.style.display="block";
}
container.onmouseleave=function(){
    ctr1.style.display="none";
}
ctr1.onclick=function(e){
    e.preventDefault();
    if(v3.paused){
        v3.play();
        img.src="img/pause.png";
    }else{
        v3.pause();
        img.src="img/play.png";
    }
}
var ad=document.querySelector(".ad");
v3.onplay=function(){
    ad.style.display="none";
}
v3.onpause=function(){
    ad.style.display="block";
}
