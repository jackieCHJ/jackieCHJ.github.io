			var handata=new Array();
			var rdata=new Array();
			var jdata=new Array();
			var ydata=new Array();
			var mdata=new Array();
			var edata=new Array();
			var idata=new Array();
			var bdata=new Array();
			var worlddata=new Array();
			var worldsumdata=new Array();
			var dataobject;
			var citydata=new Array();
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

$.get('https://jackiechj.github.io/first/json/world1.json', function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('world', geoJson);
	var val=convertData(worlddata,citydata.features);

    myChart.setOption(option = {
        title: {
            text: '世界疫情分布',
            //subtext: '人口密度数据来自Wikipedia',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
        console.log(params);
        var showHtm="";
        
        showHtm+="国家："+params.name+'<br>'+ "确诊人数："+ params.value[2]+" 人"
  
        return showHtm;
        }},
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
		geo: {
        map: 'world',
		zoom: 1.2,
		aspectScale:1.2,
        itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {					// 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
    },
        /* visualMap: {
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        }, */
        series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: val,
             symbolSize: function (val) {
                if(val[2]>10000){
				return 25;
				}
				else if(val[2]>9000)
					return 15;
				else if(val[2]>1000)
					return 10
				else
					return 7;
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
        }/* ,
		 {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: blue
                            }
                        },
                        data: worlddata
                    } */
		/* ,
            {
                name: '香港18区人口密度',
                type: 'map',
                mapType: 'world', // 自定义扩展图表类型
				zoom: 1.2,
				aspectScale:1.2,
				//width:120%,
                label: {
                    show: false
                },
                data: worlddata 
                 //自定义名称映射
                 
            } */
			
        
			/* ,
			
			{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data1),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            itemStyle: {
                color: 'purple'
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        } */
        ]
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
}
	$(function(){

			$.get("https://jackiechj.github.io/first/data/hg.json",function(msg){       //请求返回参数
		handata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/rb.json",function(msg){       //请求返回参数
		rdata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/jnd.json",function(msg){       //请求返回参数
		jdata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/yd.json",function(msg){       //请求返回参数
		ydata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/mg.json",function(msg){       //请求返回参数
		mdata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/eg.json",function(msg){       //请求返回参数
		edata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/idl.json",function(msg){       //请求返回参数
		idata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/bx.json",function(msg){       //请求返回参数
		bdata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/world.json",function(msg){       //请求返回参数
		worlddata=msg;
			});
			$.get("https://jackiechj.github.io/first/data/worldsum.json",function(msg){       //请求返回参数
		worldsumdata=msg;
		document.getElementById('worldsum').innerHTML = worldsumdata[0].value;
			});
			$.get("https://jackiechj.github.io/first/data/data.json",function(msg){       //请求返回参数
		dataobject=msg;
			});
			$.get("https://jackiechj.github.io/first/json/city1.json",function(msg){       //请求返回参数
		citydata=msg;
			});
		
	if(worldsumdata.length!=0){
		
	}	
var dom = document.getElementById("container");
chartsworld(dom);
var domhan = document.getElementById("hanguo");
chartshan(domhan);
var domi = document.getElementById("italy");
chartitaly(domi);
var domi = document.getElementById("eurape");
charteur(domi);
 });

  
	