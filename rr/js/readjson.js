			
			var worlddata=new Array();
			var citydata;
			var time=new Array();
			var zdata;
function chartsworld(dom){
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
var convertData = function (dataworld,datacity) {
    var res = [];
    for (var i = 0; i < datacity.length; i++) {
		var pro=datacity[i].properties;
		var adoname=pro.name;
		var newArr = dataworld.filter(function (obj) {
		return obj.name== adoname;
});
        
        if (newArr.length!=0) {
			var vvalue=newArr[0].value;
			var geome=datacity[i].geometry;
			var coor=geome.coordinates;
			var arr=[];arr.push(coor);
			coor.push(vvalue);
            res.push({
                name: adoname,
                value: coor
				//geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var dd = function (vaa,i) {
	var res=new Array();
    for (var j = 0; j < vaa.length; j++) {
		
		var obb=vaa[j];
		var newa=new Array();
		newa.push(obb.value[0]);
		newa.push(obb.value[1]);
		newa.push(obb.value[i+2]);
		var newb={name:obb.name,value:newa};
		res.push(newb);
	}
	return res;
}
$.get('https://jackiechj.github.io/first/json/world1.json', function (geoJson) {

    myChart.hideLoading();
	var val={};
    echarts.registerMap('world', geoJson);
	for (var a in worlddata )
	{
		time.push(a)
		var ival={};
	var ival=convertData(worlddata[a],citydata.features);
	val[a]=ival;
	}
	var val1=val["2001 "];
	var nval=new Array();
	 for (var i = 0; i < time.length; i++) {
		 nval.push(dd(val1,i));
	 }
	
	var val2=val["2002 "];
	var val3=val["2003 "];
    var option ={
		
	baseOption:{
		timeline:{
        data:time,
		show:true,
        autoPlay : true,
        playInterval : 1000
    },
        title: {
            text: '入境主要国家人口流入情况',
			
			textStyle: {
            color: '#D3D0C5'
        }
			
            //subtext: '人口密度数据来自Wikipedia',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
            trigger: 'item',
             formatter: function (params, ticket, callback) {
        console.log(params);
        var showHtm="";
        
        showHtm+="国家："+params.name+'<br>'+ "入境人数："+ params.value[2]+" 人"
  
        return showHtm;
        }}, 
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                //dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
		geo: {
        map: 'world',
		zoom: 1.2,
		aspectScale:1.2,
         itemStyle: { // 地图区域的多边形 图形样式。
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)', // 图形的描边颜色
                    borderWidth: 1, // 描边宽度 0表示无描边
                    areaColor: { // 地图区域的颜色
                        type: 'radial', // 径向渐变
                        x: 0.5, // 圆心 x,y
                        y: 0.5,
                        r: 0.8, // 半径
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)', // 阴影颜色
                    shadowOffsetX: -2, //阴影水平方向上的偏移距离。
                    shadowOffsetY: 2, //阴影垂直方向上的偏移距离。
                    shadowBlur: 10 // 图形阴影的模糊大小
                },
				 emphasis: { // 鼠标移动到时
                    areaColor: 'rgb(255,182,193,0.7)',
                    borderWidth: 0
                }
            }
    },
        series: [
		{
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
           
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            itemStyle: {
                color: 'red'
            },
            emphasis: {
                label: {
                    show: false
                }
            }
        }
        ]
    },
							options: []
							
							}
	//--------------------------------------
	for(var i=0;i<time.length;i++)
	{
		var nnv=nval[i];
	option.options.push(
		{
									title : {'text':(2000+i+1)+'年四川省入境客源国人数情况'},
									/* tooltip: {
									trigger: 'item',
									formatter: function (params, ticket, callback) {
								console.log(params);
								var showHtm="";
								//var xx=i+2;
								showHtm+="国家："+params.name+'<br>'+ "入境人数："+ params.value[2]+" 人"
						  
								return showHtm;
								}},  */
									geo: {
								map: 'world',
								zoom: 1.2,
								aspectScale:1.2,
								 itemStyle: { // 地图区域的多边形 图形样式。
										normal: {
											borderColor: 'rgba(147, 235, 248, 1)', // 图形的描边颜色
											borderWidth: 1, // 描边宽度 0表示无描边
											areaColor: { // 地图区域的颜色
												type: 'radial', // 径向渐变
												x: 0.5, // 圆心 x,y
												y: 0.5,
												r: 0.8, // 半径
												colorStops: [{
													offset: 0,
													color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
												}, {
													offset: 1,
													color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
												}],
												globalCoord: false // 缺省为 false
											},
											shadowColor: 'rgba(128, 217, 248, 1)', // 阴影颜色
											shadowOffsetX: -2, //阴影水平方向上的偏移距离。
											shadowOffsetY: 2, //阴影垂直方向上的偏移距离。
											shadowBlur: 10 // 图形阴影的模糊大小
										},
										 emphasis: { // 鼠标移动到时
											areaColor: 'rgb(255,182,193,0.7)',
											borderWidth: 0
										}
									}
							},
									series: [
								{
															name: 'pm2.5',
															type: 'scatter',
															coordinateSystem: 'geo',
															data: nnv,
															symbolSize: function (nnv) {
																if(nnv[2]>200000){return 100;}
																else if(nnv[2]>10000){return 80;}
																else if(nnv[2]>90000){return 60;}
																else if(nnv[2]>70000){return 50;}
																else if(nnv[2]>50000){return 40;}
																else if(nnv[2]>40000){return 30;}
																else if(nnv[2]>10000){return 20;}
																else if(nnv[2]>5000){return 15;}
																else if(nnv[2]>1000){return 8}
																else{return 5;}
															},  
															label: {
																formatter: '{b}',
																position: 'right',
																show: false
															},
															itemStyle: {
																color: 'red'
															},
															emphasis: {
																label: {
																	show: false
																}
															}
								}
								]
						}
	)
	}
	;
	if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
});

}
$(function(){

		
			$.get("https://jackiechj.github.io/rujing/rujing.json",function(msg){       //请求返回参数
		worlddata=msg;
			});
			
			
			$.get("https://jackiechj.github.io/first/json/city1.json",function(msg){       //请求返回参数
		citydata=msg;});
		$.get("https://jackiechj.github.io/first/data/zg.json",function(msg){       //请求返回参数
		zdata=msg;
			});
	
var dom = document.getElementById("container");
chartsworld(dom);
var dome = document.getElementById("eurape");
chartsbar(dome);
/* var domhan = document.getElementById("hanguo");
chartshan(domhan);
var domi = document.getElementById("italy");
chartitaly(domi);
var dome = document.getElementById("eurape");
charteur(dome);
var domc = document.getElementById("china");
chartschina(domc); */
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function chartsbar(dom){
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
var convertData = function (dataworld,datacity) {
    var res = [];
    for (var i = 0; i < datacity.length; i++) {
		var pro=datacity[i].properties;
		var adoname=pro.name;
		var newArr = dataworld.filter(function (obj) {
		return obj.name== adoname;
});
        
        if (newArr.length!=0) {
			var vvalue=newArr[0].value;
			var geome=datacity[i].geometry;
			var coor=geome.coordinates;
			var arr=[];arr.push(coor);
			coor.push(vvalue);
            res.push({
                name: adoname,
                value: coor
				//geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var dd = function (vaa,i) {
	var res=new Array();
    for (var j = 0; j < vaa.length; j++) {
		
		var obb=vaa[j];
		var newa=new Array();
		newa.push(obb.value[0]);
		newa.push(obb.value[1]);
		newa.push(obb.value[i+2]);
		var newb={name:obb.name,value:newa};
		res.push(newb);
	}
	return res;
}
$.get('https://jackiechj.github.io/first/json/world1.json', function (geoJson) {

    myChart.hideLoading();
	var val={};
    echarts.registerMap('world', geoJson);
	for (var a in worlddata )
	{
		var xxx=a.replace(/^\s*|\s*$/g,"");
		var yyy=xxx+'-01-01';
		time.push(yyy)
		var ival={};
	var ival=convertData(worlddata[a],citydata.features);
	val[a]=ival;
	}
	var val1=val["2001 "];
	var nval=new Array();
	 for (var i = 0; i < time.length; i++) {
		 nval.push(dd(val1,i));
	 }
	
	var val2=val["2002 "];
	var val3=val["2003 "];
    var option ={
		
	baseOption:{
		timeline:{
        data:time,
		show:true,
        autoPlay : true,
        playInterval : 1000,
		label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            },
		
    },
        title: {
            text: '入境主要国家人口流入情况',
			
			textStyle: {
            color: '#D3D0C5',
        }
			
            //subtext: '人口密度数据来自Wikipedia',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
            trigger: 'item',
             formatter: function (params, ticket, callback) {
        console.log(params);
        var showHtm="";
        
        showHtm+="国家："+params.name+'<br>'+ "入境人数："+ params.value[2]+" 人"
  
        return showHtm;
        }}, 
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                //dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
		calculable : true,
        grid: {
            top: 50,
            bottom: 80
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                    '日本',	'\n韩国',	'马来西亚',	'\n菲律宾',	'新加坡',	'\n泰国',	'美国',	'\n加拿大',	'英国',	'\n法国',	'德国',	'\n俄罗斯',	'澳大利亚'
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人数（个）',
                // max: 53500
                max: 300000
            }
        ],
        series: [
		{name: 'GDP', type: 'bar',
		 barWidth:10,
		itemStyle:{
			color:'#1D2569',
			
		},
		},
        ]
    },
							options: []
							
							}
	//--------------------------------------
	var nnnv=new Array();
	for (var aa in worlddata)
	{
		worlddata[aa].shift();
		nnnv.push(worlddata[aa]);
	}
	
	for(var i=0;i<time.length;i++)
	{
		//var nnv=nval[i];
	option.options.push(
		{
									title : {'text':(2000+i+1)+'年四川省入境客源国人数情况'},
									/* tooltip: {
									trigger: 'item',
									formatter: function (params, ticket, callback) {
								console.log(params);
								var showHtm="";
								//var xx=i+2;
								showHtm+="国家："+params.name+'<br>'+ "入境人数："+ params.value[2]+" 人"
						  
								return showHtm;
								}},  */
									series: [
									{data: nnnv[i+1]},
								
								]
						}
	)
	}
	;
	if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
});

}