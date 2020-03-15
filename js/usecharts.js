function getMax1(arr) {
    //假设最大值max 为arr[0]
    var max = parseInt(arr[0].value);
    //遍历对比
    for (var i = 0; i < arr.length; i++) {
        //若max小于当前项 说明不是最大值 将当前项的值赋予max 
        // 继续遍历对比找到最大的值
		var obb=arr[i];
        if (max < parseInt(obb.value)) {
            max = parseInt(obb.value);
        }
    }
    return max;
}
//获取最小值
function getMin1(arr) {
    var min = (arr[0].value);
    for (var i = 0; i < arr.length; i++) {
		var obb=arr[i];
        if (min > parseInt(obb.value)) {
            min = parseInt(obb.value);
        }
    }

    return min;
}
function chartshan(dom){
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
//获取最大值

$.get('https://jackiechj.github.io/first/json/han2.json', function (geoJson) {

    myChart.hideLoading();
console.log(handata);
    echarts.registerMap('han', geoJson);
	//var val=convertData(worlddata,citydata.features);

    myChart.setOption(option = {
        title: {
            text: '韩国疫情分布',
			textStyle: {
            color: '#D3D0C5'}
            //subtext: '人口密度数据来自Wikipedia',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
        console.log(params);
        var showHtm="";
        
        showHtm+="一级行政区："+params.name+'<br>'+ " 确诊人数："+ params.value+" 人"
  
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
		/* geo: {
        map: 'han',
		
        itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {					// 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
    }, */
        visualMap: {
            min: 0,
            max: 1400,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#323c48','yellow', '#DD9222','#CC3333','orangered','red'],
            }
        },
        series: [
		{name: '韩国疫情分布',
                type: 'map',
				zoom: 1.3,
				aspectScale:1,
                mapType: 'han', // 自定义扩展图表类型
				
                label: {
                    show: false
                },
                data: handata,
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
		}}
        ]
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
}




function getMax1(arr) {
    //假设最大值max 为arr[0]
    var max = parseInt(arr[0].value);
    //遍历对比
    for (var i = 0; i < arr.length; i++) {
        //若max小于当前项 说明不是最大值 将当前项的值赋予max 
        // 继续遍历对比找到最大的值
		var obb=arr[i];
        if (max < parseInt(obb.value)) {
            max = parseInt(obb.value);
        }
    }
    return max;
}
//获取最小值
function getMin1(arr) {
    var min = (arr[0].value);
    for (var i = 0; i < arr.length; i++) {
		var obb=arr[i];
        if (min > parseInt(obb.value)) {
            min = parseInt(obb.value);
        }
    }

    return min;
}
function chartitaly(dom){
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
//获取最大值

$.get('https://jackiechj.github.io/first/json/italy.json', function (geoJson) {

    myChart.hideLoading();
console.log(handata);
    echarts.registerMap('i', geoJson);
	//var val=convertData(worlddata,citydata.features);

    myChart.setOption(option = {
        title: {
            text: '意大利疫情分布',
			 textStyle:{
                    align:'right',
					color: '#D3D0C5'	
			 }	,	//水平对齐

			  right:'0'
			//title. textAlign : 'right'
            //subtext: '人口密度数据来自Wikipedia',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
        console.log(params);
        var showHtm="";
        
        showHtm+="一级行政区："+params.name+'<br>'+ " 确诊人数："+ params.value+" 人"
  
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
		/* geo: {
        map: 'han',
		
        itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {					// 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
    }, */
        visualMap: {
            min: 0,
            max: 1400,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#323c48','yellow', '#DD9222','#CC3333','orangered','red'],
            }
        },
        series: [
		{name: 'i国疫情分布',
                type: 'map',
				zoom: 1.3,
				aspectScale:1,
                mapType: 'i', // 自定义扩展图表类型
                label: {
                    show: false
                },
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
            },
                data: idata}
		
        ]
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
}


function charteur(dom){
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
            text: '欧洲疫情分布',
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
        
        showHtm+="国家："+params.name+'<br>'+ "确诊人数："+ params.value[2]+" 人"
  
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
		zoom: 1.4,
		aspectScale:1.2,
		center: [1.8558,57.770091],
		boundingCoords: [
    // 定位左上角经纬度
    [-34.055724,71.829316],
    // 定位右下角经纬度
    [40.563712,32.727186]
],
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
					return 25;
				else if(val[2]>1000)
					return 15
				else
					return 10;
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


function chartschina(dom){
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
//获取最大值

$.get('https://cdn.jsdelivr.net/npm/echarts@4.6.0/map/json/china.json', function (geoJson) {

    myChart.hideLoading();
//console.log(handata);
    echarts.registerMap('zg', geoJson);
	//var val=convertData(worlddata,citydata.features);

    myChart.setOption(
	option = {
        title: {
            text: '中国疫情分布',
			textStyle: {
				align:'right',
				color: '#D3D0C5'
				},
				right:'0'
            //subtext: '人口密度数据来自Wikipedia',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
        console.log(params);
        var showHtm="";
        
        showHtm+="省份："+params.name+'<br>'+ " 确诊人数："+ params.value+" 人"
  
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
		/* geo: {
        map: 'han',
		
        itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {					// 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
    }, */
        visualMap: {
            min: 0,
            max: 1400,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#323c48','yellow', '#DD9222','#CC3333','orangered','red'],
            }
        },
        series: [
		{name: '中国疫情分布',
                type: 'map',
				zoom: 1,
				aspectScale:1,
                mapType: 'zg', // 自定义扩展图表类型
				
                label: {
                    show: false
                },
                data: zdata,
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
		}}
        ]
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
}
