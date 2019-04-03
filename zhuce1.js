/*实现“省”和“市”的级联下拉列表*/
var cities=[
    [{"name":'东城区',"value":101},
     {"name":'西城区',"value":102},
     {"name":'海淀区',"value":103},
     {"name":'朝阳区',"value":104}],
    [{"name":'河东区',"value":201},
     {"name":'河西区',"value":202},
     {"name":'南开区',"value":203}],
    // 河北省
    [{"name":'石家庄市',"value":301},
     {"name":'唐山市',"value":302},
     {"name":'秦皇岛市',"value":303},
     {"name":'邯郸市',"value":304},
     {"name":'邢台市',"value":305},
     {"name":'保定市',"value":306},
     {"name":'张家口市',"value":307},
     {"name":'承德市',"value":308},
     {"name":'沧州市',"value":309},
     {"name":'廊坊市',"value":310},
     {"name":'衡水市',"value":311}],
    //  山西
    [{"name":'太原市',"value":401},
     {"name":'大同市',"value":402},
     {"name":'阳泉市',"value":403},
     {"name":'长治市',"value":404},
     {"name":'晋城市',"value":405},
     {"name":'朔州市',"value":406}],
    // 辽宁
    [{"name":'沈阳市',"value":501},
     {"name":'大连市',"value":502},
     {"name":'鞍山市',"value":503},
     {"name":'抚顺市',"value":504},
     {"name":'本溪市',"value":505},
     {"name":'丹东市',"value":506},
     {"name":'锦州市',"value":507},
     {"name":'营口市',"value":508},
     {"name":'辽阳市',"value":509},
     {"name":'铁岭市',"value":510},
     {"name":'葫芦岛市',"value":511}],
    //  黑龙江
    [{"name":'哈尔滨市',"value":601},
     {"name":'齐齐哈尔市',"value":602},
     {"name":'鸡西市',"value":603},
     {"name":'鹤岗市',"value":604},
     {"name":'双鸭山市',"value":605},
     {"name":'大庆市',"value":606},
     {"name":'七台河市',"value":607},
     {"name":'黑河市',"value":608},
     {"name":'牡丹江市',"value":609},
     {"name":'伊春市',"value":610},
     {"name":'佳木斯市',"value":611}],
    //  江苏
    [{"name":'无锡市',"value":701},
     {"name":'徐州市',"value":702},
     {"name":'常州市',"value":703},
     {"name":'苏州市',"value":704},
     {"name":'南通市',"value":705},
     {"name":'连云港市',"value":706},
     {"name":'淮阴市',"value":707},
     {"name":'盐城市',"value":708},
     {"name":'扬州市',"value":709},
     {"name":'镇江市',"value":710},
     {"name":'泰州市',"value":711},
     {"name":'宿迁市',"value":712}],
];
//1.查找触发事件的元素
var selProvs=document.getElementsByName("provs")[0];
//2.绑定事件处理事件
//当selProvs中的选中项改变时自动执行
selProvs.onchange=function(){
  //3.查找要修改的元素：第二个select
  var selCts=document.getElementsByName("cities")[0];
  //4.修改元素
  var selProvs=this;
  var i=selProvs.selectedIndex;
  if(i>0){
    var cts=cities[i-1];
    var frag=document.createDocumentFragment();
    //先添加一个<option>-请选择-
    var opt=document.createElement("option");
    opt.innerHTML="-请选择-";
    frag.appendChild(opt);
    for(var city of cts){
      //每遍历一个城市，就创建一个option，并加入frag中
      var opt=document.createElement("option");
      frag.appendChild(opt);
      //将当前城市对象的name放入option中
      opt.innerHTML=city.name;
    }
    //每次添加新option之前，先清除旧的内容
    selCts.innerHTML="";
    selCts.appendChild(frag);
    selCts.className="";
  }else{
    selCts.className="hide";
  }
}
