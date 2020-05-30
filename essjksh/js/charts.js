var geojson=null;var geojson1=null;
var jingdian=new Array();
		function chartjingdian(dom){
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		myChart.showLoading();
			
  if(geojson!=null&&geojson1!=null) {
		
			
	var jingqu=geojson1;
	var arr=jingqu.features;
	for(var i=0;i<arr.length;i++){
		var pro=arr[i].properties;
		var adoname=pro._name;
		var ele=arr[i].geometry;
		var a=ele.coordinates;
		a.push(1);
		jingdian.push({
                name: adoname,
                value: a
				//geoCoord.concat(data[i].value)
            });
		
	};
	myChart.hideLoading();
		echarts.registerMap('sichuan', geojson);
		myChart.setOption(option = {		tooltip: {
													trigger: 'item',
													formatter: function (params, ticket, callback) {
												console.log(params);
												var showHtm="";
												
												showHtm+="景点名称："+params.name;
										  
												return showHtm;
												}},							
											
											geo:{
										show: true,
										type: 'map',
										map:'sichuan',
										mapType: 'sichuan',
										zoom: 1.2,itemStyle: { // 地图区域的多边形 图形样式。
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
            name: 'jingdian',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: jingdian,
             symbolSize: function (jingdian) {
					return 5;
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
        
										});

  }

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

		}
$(function(){

	$.get('https://jackieCHJ.github.io/json/sichuan.json', function (ggeoJson) {
		geojson=ggeoJson;
		$.get('https://jackieCHJ.github.io/json/jingqu.json', function (ggeoJson1) {
				geojson1=ggeoJson1;	
				var dom = document.getElementById("jingqu");
				chartjingdian(dom);
				
	});
	});
	
				

	
});

