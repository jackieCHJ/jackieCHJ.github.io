//自调用函数
(function () {
    // 1、页面一加载就要知道页面宽度计算
    var setFont = function () {
        // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
        var html = document.documentElement;// 获取html
        // 获取宽度
        var width = html.clientWidth;

        // 判断
        if (width < 1024) width = 1024
        if (width > 1920) width = 1920
        // 设置html的基准值
        var fontSize = width / 80 + 'px';
        // 设置给html
        html.style.fontSize = fontSize;
    }
    setFont();
    // 2、页面改变的时候也需要设置
    // 尺寸改变事件
    window.onresize = function () {
        setFont();
    }
})();

(function () {
    //事件委托
    $('.monitor').on('click', ' a', function () {
        //点击当前的a 加类名 active  他的兄弟删除类名
        $(this).addClass('active').siblings().removeClass('active');
        //获取一一对应的下标 
        var index = $(this).index();
        //选取content 然后狗日对应下标的 显示   当前的兄弟.content隐藏
        $('.content').eq(index).show().siblings('.content').hide();
    });
    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $('.monitor .marquee').each(function (index, dom) {
        //将每个 的所有子级都复制一遍
        var rows = $(dom).children().clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });

})();
(function () {
    var myechart = echarts.init($('.pie')[0]);
    option = {
        // 控制提示
        tooltip: {
            // 非轴图形，使用item的意思是放到数据对应图形上触发提示
            trigger: 'item',
            // 格式化提示内容：
            // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 控制图表
        series: [
            {
                // 图表名称
                name: '项目',
                // 图表类型
                type: 'pie',
                // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
                // 百分比基于  图表DOM容器的半径
                radius: ['10%', '70%'],
                // 图表中心位置 left 50%  top 50% 距离图表DOM容器
                center: ['50%', '50%'],
                // 半径模式，另外一种是 area 面积模式
                roseType: 'radius',
                // 数据集 value 数据的值 name 数据的名称
                data: [
                    { value: 33, name: '长途交通' },
                    { value: 8, name: '其他服务' },
                    { value: 2, name: '市内交通' },
                    { value: 3, name: '邮电通讯' },
                    { value: 6, name: '娱乐' },
                    { value: 22, name: '购物' },
                    { value: 7, name: '餐饮' },
                    { value: 13, name: '住宿' },
					{ value: 5, name: '游览' }
                ],
                //文字调整
                label: {
                    fontSize: 10
                },
                //引导线
                labelLine: {
                    length: 8,
                    length2: 10
                }
            }
        ],
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff']
    };
    myechart.setOption(option);
})();
// 用户
(function () {
    // 中间省略的数据  准备三项
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        }
    };
    /* option = {
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            axisPointer: {
                // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
                type: 'shadow'
            }
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            left: '0',
            right: '3%',
            bottom: '3%',
            top: '5%',
            // 大小是否包含文本【类似于boxsizing】
            containLabel: true,
            //显示边框
            show: true,
            //边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                // 刻度设置
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                //文字
                axisLabel: {
                    color: '#4c9bfd'
                }
            }
        ],
        // 控制y轴
        yAxis: [
            {
                // 使用数据的值设为刻度文字
                type: 'value',
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                //文字
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
            }
        ],
        // 控制x轴
        series: [

            {
                // series配置
                // 颜色
                itemStyle: {
                    // 提供的工具函数生成渐变颜色
                    color: new echarts.graphic.LinearGradient(
                        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00fffb' }, // 0 起始颜色
                            { offset: 1, color: '#0061ce' }  // 1 结束颜色
                        ]
                    )
                },
                // 图表数据名称
                name: '用户统计',
                // 图表类型
                type: 'bar',
                // 柱子宽度
                barWidth: '60%',
                // 数据
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    }; */
	option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['日本', '韩国', '马来西亚', '菲律宾','新加坡','泰国','美国','加拿大','英国','法国','德国','俄罗斯','澳大利亚'],
		textStyle:{
			 color :'#F7F7F7'
		}
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    /* toolbox: {
        feature: {
            saveAsImage: {}
        }
    }, */
    xAxis: {
        type: 'category',
        boundaryGap: false,
		splitLine:{
　　　　show:false
　　},
        data: ['2001' ,'2002' ,'2003' ,'2004' ,'2005' ,'2006' ,'2007' ,'2008' ,'2009' ,'2010' ,'2011' ,'2012' ,'2013' ,'2014' ,'2015' ,'2016' ,'2017'],
		axisLine:{
                lineStyle:{
                    color:'#fafafa',
                }
            }

		
    },
    yAxis: {
		splitLine:{
　　　　show:false
　　},
        type: 'value',
		axisLine:{
                lineStyle:{
                    color:'#fafafa',
                }
            }
    },
    series: [
        /* {
            name: '总计',
            type: 'line',
            
            data: ['28.09460' ,'41.15010' ,'24.40330' ,'54.64630' ,'68.73100' ,'85.76890' ,'107.41270' ,'47.77400' ,'61.49490' ,'74.97000' ,'113.72980' ,'151.29300' ,'147.32260' ,'169.65670' ,'193.43750' ,'219.23280' ,'241.29450']
        }, */
        {
            name: '日本',
            type: 'line',
           
            data: ['6.68890' ,'15.28430' ,'6.46780' ,'14.56220' ,'15.49850' ,'23.11640' ,'28.75780' ,'5.78100' ,'16.69100' ,'20.22560' ,'23.69730' ,'25.17370' ,'15.17750' ,'16.97570' ,'17.18300' ,'20.28580' ,'21.23090' ]
        },
        {
            name: '韩国',
            type: 'line',
       
            data: ['0.90210' ,'2.37120' ,'1.99460' ,'3.97540' ,'6.37770' ,'7.69220' ,'14.32950' ,'5.60580' ,'3.71190' ,'5.83170' ,'9.66110' ,'11.11470' ,'11.32140' ,'14.43230' ,'16.31840' ,'17.59930' ,'14.30420']
        },
        {
            name: '马来西亚',
            type: 'line',
           
            data: ['0.48220' ,'1.75100' ,'1.27080' ,'4.74840' ,'6.86610' ,'4.99070' ,'3.83720' ,'1.70310' ,'1.77490' ,'3.17780' ,'4.69350' ,'7.10660' ,'8.27060' ,'8.97790' ,'12.62050' ,'14.65320' ,'16.11740']
        },
        {
            name: '菲律宾',
            type: 'line',
         
            data: ['0.14360' ,'0.20710' ,'0.11330' ,'0.26430' ,'0.52850' ,'0.39030' ,'0.60300' ,'0.25350' ,'0.45740' ,'0.30430' ,'0.41080' ,'0.93790' ,'0.96190' ,'0.99800' ,'1.89670' ,'1.66100' ,'1.85000']
        },
		{
            name: '新加坡',
            type: 'line',
     
            data: ['0.89380' ,'2.42790' ,'2.48730' ,'6.15660' ,'7.44660' ,'8.56260' ,'8.71790' ,'3.63330' ,'3.88320' ,'3.62180' ,'6.79260' ,'10.28710' ,'11.05550' ,'12.04920' ,'12.36740' ,'13.97190' ,'15.18480']
        },
		{
            name: '泰国',
            type: 'line',
         
            data: ['1.27160' ,'5.20230' ,'3.04370' ,'5.54060' ,'5.83570' ,'8.09490' ,'6.47200' ,'2.38040' ,'1.57850' ,'2.12610' ,'4.22940' ,'5.85300' ,'5.41160' ,'5.63550' ,'6.45320' ,'7.81150' ,'8.13490']
        },
		{
            name: '美国',
            type: 'line',
         
            data: ['2.49360' ,'4.54290' ,'2.67190' ,'5.50070' ,'7.01130' ,'8.33630' ,'11.08000' ,'7.02650' ,'7.45630' ,'8.91240' ,'14.63810' ,'20.98340' ,'22.15290' ,'25.70420' ,'28.78370' ,'33.63900' ,'37.97490']
        },
		{
            name: '加拿大',
            type: 'line',
      
            data: ['0.40750' ,'0.87500' ,'0.59100' ,'0.74120' ,'1.12910' ,1.63170 ,2.34980 ,1.85720 ,2.26070 ,2.20070 ,3.47140 ,5.08010 ,5.04720 ,6.05520 ,7.11670 ,8.29260 ,9.70160]
        },
		{
            name: '英国',
            type: 'line',
       
            data: [0.56450 ,1.05600 ,0.69400 ,1.41090 ,1.88880 ,3.09580 ,5.37570 ,3.27270 ,4.04570 ,5.24130 ,9.30420 ,12.76370 ,13.19140 ,15.15910 ,17.40990 ,20.45820 ,23.15850]
        },
		{
            name: '法国',
            type: 'line',
          
            data: [0.46180 ,0.84890 ,0.50650 ,1.08620 ,1.78690 ,2.66270 ,4.16350 ,2.59670 ,2.55180 ,2.79500 ,4.25170 ,5.25300 ,5.55560 ,7.04690 ,7.46510 ,8.73450 ,10.13410]
        },
		{
            name: '德国',
            type: 'line',
            
            data: [0.52730 ,1.18420 ,0.77180 ,1.16370 ,1.97320 ,2.98700 ,3.28300 ,1.55810 ,1.83960 ,2.41650 ,5.36270 ,5.37970 ,6.08390 ,7.30350 ,9.69680 ,11.22300 ,13.22910]
        },
		{
            name: '俄罗斯',
            type: 'line',
         
            data: [0.06620 ,0.09730 ,0.13420 ,0.23290 ,0.29310 ,0.54500 ,0.59420 ,0.47380 ,0.34810 ,0.49680 ,0.88990 ,1.15690 ,1.22770 ,1.55450 ,1.66060 ,1.96910 ,2.32260]
        },
		{
            name: '澳大利亚',
            type: 'line',
      
            data: [0.28180 ,0.58190 ,0.46970 ,0.73290 ,1.03030 ,1.34620 ,2.24080 ,1.82290 ,1.63340 ,2.30900 ,3.88990 ,7.23840 ,7.66650 ,8.55730 ,8.95190 ,10.29070 ,11.86800]
        }
    ]
};

    var myechart = echarts.init($('.users .bar')[0]);
    myechart.setOption(option);
})();

//订单
(function () {
    var data = {
        day365: { orders: '20,301,987', amount: '99834' },
        day90: { orders: '301,987', amount: '9834' },
        day30: { orders: '1,987', amount: '3834' },
        day1: { orders: '987', amount: '834' }
    }
    //点击事件
    $('.order').on('click', '.filter a', function () {
        //点击之后加类名
        $(this).addClass('active').siblings().removeClass('active');
        // 先获取点击a的 data-key自定义属性
        var key = $(this).attr('data-key');
        //获取自定义属性
        // data{}==>data.shuxing data['shuxing]
        key = data[key];//
        $('.order .item h4:eq(0)').text(key.orders);
        $('.order .item h4:eq(1)').text(key.amount);
    });
    //定时器
    var index = 0;
    var aclick = $('.order a');
    setInterval(function () {
        index++;
        if (index > 3) {
            index = 0;
        }
        //每san秒调用点击事件
        aclick.eq(index).click();
    }, 3000);
})();
//外汇收入
(function () {
    var option = {
        //鼠标提示工具
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            // 类目类型                                  
            type: 'category',
            // x轴刻度文字                                  
            data: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线  
            },
            boundaryGap: false//去除轴内间距
        },
        yAxis: {
            // 数据作为刻度文字                                  
            type: 'value',
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线  
            },
            boundaryGap: false//去除轴内间距
        },
        //图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色

            },
            right: '10%'//距离右边10%
        },
        // 设置网格样式
        grid: {
            show: true,// 显示边框
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        series: [{
            name: '当年外汇收入',
            // 数据                                  
            data: [16579,20021,14959,28885,31595,39523,51243,15388,28856,35409,63089,79815,76476,87426.35 ,118087.06 ,156412.00 ,144605.28],
            // 图表类型                                  
            type: 'line',
            // 圆滑连接                                  
            smooth: true,
            itemStyle: {
                color: '#00f2f1'  // 线颜色
            }
        },
        {
            name: '前一年外汇收入',
            // 数据                                  
            data: [12187,16579,20021,14959,28885,31595,39523,51243,15388,28856,35409,63089,79815,76476,87426.35 ,118087.06 ,156412.00],
            // 图表类型                                  
            type: 'line',
            // 圆滑连接                                  
            smooth: true,
            itemStyle: {
                color: '#ed3f35'  // 线颜色
            }
        }]
    };
    var myechart = echarts.init($('.line')[0]);
    myechart.setOption(option);

   
})();
(function () {
    var option = {
        series: [
            {
                type: 'pie',
                radius: ['130%', '150%'],  // 放大图形
                center: ['50%', '80%'],    // 往下移动  套住75%文字
                label: {
                    show: false,
                },
                startAngle: 180,
                hoverOffset: 0,  // 鼠标经过不变大
                data: [
                    {
                        value: 100,
                        itemStyle: { // 颜色渐变#00c9e0->#005fc1
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#00c9e0' },
                                    { offset: 1, color: '#005fc1' }
                                ]
                            }
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d

                    { value: 200, itemStyle: { color: 'transparent' } }// 透明隐藏第三块区域
                ]
            }
        ]
    };
    var myechart = echarts.init($('.gauge')[0]);
    myechart.setOption(option);
})();
//外汇收入
(function () {
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['成都平原经济区', '川南经济区', '川东北经济区', '攀西经济区','川西北生态经济区','区域间','全省'],
		textStyle:{
			 color :'#F7F7F7'
		}
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    /* toolbox: {
        feature: {
            saveAsImage: {}
        }
    }, */
    xAxis: {
        type: 'category',
        boundaryGap: false,
		splitLine:{
　　　　show:false
　　},
        data: [2011,2012,2013,2014,2015,2016,2017],
		axisLine:{
                lineStyle:{
                    color:'#fafafa',
                }
            }

		
    },
    yAxis: {
		splitLine:{
　　　　show:false
　　},
        type: 'value',
		axisLine:{
                lineStyle:{
                    color:'#fafafa',
                }
            }
    },
    series: [
       
        {
            name: '成都平原经济区',
            type: 'line',
           
            data: [0.0634 ,0.0662 ,0.0697 ,0.0708 ,0.0669 ,0.0938 ,0.1010  ]
        },
        {
            name: '川南经济区',
            type: 'line',
       
            data: [0.0058 ,0.0052 ,0.0059 ,0.0049 ,0.0050 ,0.0055 ,0.0059 ]
        },
        {
            name: '川东北经济区',
            type: 'line',
           
            data: [0.0184 ,0.0182 ,0.0199 ,0.0198 ,0.0188 ,0.0182 ,0.0175 ]
        },
        {
            name: '攀西经济区',
            type: 'line',
         
            data: [0.0838 ,0.0874 ,0.0881 ,0.0907 ,0.1069 ,0.1099 ,0.1266 ]
        },
		{
            name: '川西北生态经济区',
            type: 'line',
     
            data: [0.0112 ,0.0166 ,0.0172 ,0.0201 ,0.0245 ,0.0187 ,0.0124 ]
        },
		{
            name: '区域间',
            type: 'line',
         
            data: [0.0474 ,0.0493 ,0.0518 ,0.0527 ,0.0515 ,0.0677 ,0.0736 ]
        },
		{
            name: '全省',
            type: 'line',
         
            data: [0.2300 ,0.2429 ,0.2527 ,0.2591 ,0.2735 ,0.3137 ,0.3371 ]
        }
    ]
};

    var myechart = echarts.init(document.getElementById("xier"));
    myechart.setOption(option);
   
})();