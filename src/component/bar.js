import React, { Component } from "react";

// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

class Bar extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById("main"));
    const app={};
    const dom = document.getElementById("container");
    // option = null;


    app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        const labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
            textBorderColor: '#fff'
        }
    }
};

    // 绘制图表
    myChart.setOption({
      color: ["#003366", "#006699", "#4cabce", "#e5323e"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Forest", "Steppe", "Desert", "Wetland"],
      },
      toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center",
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          data: ["2012", "2013", "2014", "2015", "2016"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Forest",
          type: "bar",
          barGap: 0,
          label: labelOption,
          data: [320, 332, 301, 334, 390],
        },
        {
          name: "Steppe",
          type: "bar",
          label: labelOption,
          data: [220, 182, 191, 234, 290],
        },
        {
          name: "Desert",
          type: "bar",
          label: labelOption,
          data: [150, 232, 201, 154, 190],
        },
        {
          name: "Wetland",
          type: "bar",
          label: labelOption,
          data: [98, 77, 101, 99, 40],
        },
      ],
    });
  }
  render() {
    return <div id="main" style={{ width: "100%", height: "100%" }}></div>;
  }
}

export default Bar;
