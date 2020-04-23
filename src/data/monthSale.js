function takeData (){
    let data = []
    for(let i = 1;i<=12;i++){
data.push(parseFloat(Math.random()*100,10))
    }
    return data;
}
const data1 = takeData();
const data2 = takeData();
const data3 = takeData();
const data4 = takeData();
export const monthSale = {
    color: ['#5793f3', '#d14a61', '#675bba'],

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['2015 降水量', '2016 降水量']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#d14a61'
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'XHP',
            type: 'line',
            smooth: true,
            data: data1
        },
        {
            name: 'XHG',
            type: 'line',
            smooth: true,
            data: data2
        },
        {
            name: 'XHS',
            type: 'line',
            smooth: true,
            data: data3
        },
        {
            name: 'XHN',
            type: 'line',
            smooth: true,
            data: data4
        },
    ]
}