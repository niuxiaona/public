$(function(){
//�����ڵ����ݷ�������ʱ�Զ�����
window.onscroll=function(){
    //��ù������ľ��롪����ҳ���������ĵ���ʾ�������ľ���
    var scrollTop=document.body.scrollTop
        ||document.documentElement.scrollTop;
    console.log(scrollTop);
    if(scrollTop>=600)
        toTop.style.display="block";
    else
        toTop.style.display="none";
}
})