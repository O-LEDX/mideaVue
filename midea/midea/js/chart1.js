// 初始化图表
let stockAchart = echarts.init(document.getElementsByClassName('stock-A-chart')[0],'wonderland');

option = {
    title: {
        left: '10%',
        text: '人民币 79.60 + 0.14%Midea Group                                                                       市值 559.92 B   成交量 17.68 M（股）',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(params) {
            let result = params[0].name + '<br/>';
            result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[0].color + ';"></span>';
            result += params[0].seriesName + ': ' + params[0].value + ' CNY';
            return result;
        }
    },
    xAxis: {
        type: 'category',
        axisTick: {
        alignWithLabel: true
      },
        boundaryGap: false,
        data: ['12月','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月'],
    },
    yAxis: {
        xAxisIndex: 0,
        type: 'value',
        name: '',
        min: 65.00,
        max: 82.50,
        interval: 2.50,
        axisLabel: {
        }
    },
    series: [{
        name: 'A股',
        type: 'line',
        yAxisIndex: 0,
        smooth: true,
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(0, 140, 140, 0.3)' // 顶部颜色：蓝色，透明度0.3
                }, {
                    offset: 1,
                    color: 'rgba(0, 140, 140, 0.05)' // 底部颜色：蓝色，透明度0.05
                }]
            }
        },
        data: [70.08,75.22,72.21,73.05,75.39,74.20,75.91,72.11,70.19,74.03,74.03,72.66,76.40]
    }]
};

stockAchart.setOption(option);

// 立即调整图表大小以占满容器
setTimeout(function() {
    stockAchart.resize();
}, 100);

// 响应式调整
window.addEventListener('resize', function() {
    stockAchart.resize();
});
