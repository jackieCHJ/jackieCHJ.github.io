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
                dataView: {readOnly: false},
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
                data: handata}
		
        ]
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
 
}