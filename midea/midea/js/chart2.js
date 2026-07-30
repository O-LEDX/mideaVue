let stockHchart = echarts.init(document.getElementsByClassName('stock-H-chart')[0],'wonderland');

option = {
    title: {
        left: '10%',
        text: '港幣 88.85 - 0.89%Midea Group                                                                       市值 57.83 B   成交量 2.63 M （股）',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(params) {
            let result = params[0].name + '<br/>';
            result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[0].color + ';"></span>';
            result += params[0].seriesName + ': ' + params[0].value + ' HKD';
            return result;
        }
    },
    xAxis: {
        type: 'category',
        axisTick: {
        alignWithLabel: true
      },
        boundaryGap: false,
        data: ['14/10/2025','17/10/2025','20/10/2025','23/10/2025','26/10/2025','29/10/2025','1/11/2025','4/11/2025','7/11/2025','10/11/2025','13/11/2025','17/11/2025'],
    },
    yAxis: {
        xAxisIndex: 0,
        type: 'value',
        name: '',
        min: 77.50,
        max: 92.50,
        interval: 2.50,
        axisLabel: {

        }
    },
    series: [{
        name: 'H股',
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
        data: [79.90,81.10,82.20,83.40,84.00,83.15,84.00,82.40,84.45,86.15,87.35,89.85]
    }]
};

stockHchart.setOption(option);

// 立即调整图表大小以占满容器
setTimeout(function() {
    stockHchart.resize();
}, 100);

// 响应式调整
window.addEventListener('resize', function() {
    stockHchart.resize();
});
