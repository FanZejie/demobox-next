"use client";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

// 定义 Props 接口，包含 className, title 和 subtitle
interface EChartDemoProps {
  className?: string;
  title?: string;        // 可选的 title
  subtitle?: string;     // 可选的 subtitle
}

// 生成随机数据的函数
const generateRandomData = (startTime: number, minutes: number): [number, number][] => {
  const data: [number, number][] = [];
  for (let i = 0; i < minutes; i++) {
    const timestamp = startTime - i * 60 * 1000; // 每分钟一个数据点
    const value = Math.random() * (90 - 60) + 60; // 生成 60 到 90 之间的随机值
    data.push([timestamp, parseFloat(value.toFixed(2))]); // 保留两位小数
  }
  return data.reverse(); // 反转数组以从开始时间到当前时间
};


const ChartCombo: React.FC<EChartDemoProps> = ({ className, title, subtitle }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  //造假数据
  const currentTime = Date.now();
  const startTime = currentTime ; // 半小时之前的时间戳
  const data1 = generateRandomData(startTime, 30); // 生成 dataset1
  const data2 = generateRandomData(startTime, 30); // 生成 dataset2
  // 设置图表的选项
  let option = {
    title: {
      text: title,
      top: '0%',  // 控制标题距离顶部的距离，减少空白
      left: 'center', // 标题居中
      textStyle: {
        fontSize: 14,  // 调整标题字体大小，缩小标题
      },
      subtextStyle: {
        fontSize: 10,  // 调整副标题字体大小
      },
    },
    grid: {
      top: '25%',    // 图表距离顶部的距离，设置的越小，图表越往上移动
      bottom: '20%', // 调整图表的底部边距
      left: '10%',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      splitLine: {
        show: false
      },
      axisLabel:{
        formatter:function(value:number){
          let timestamp = Number(value); // 确保将 value 转换为数字
          let date = new Date(timestamp)
          console.log('date',date)
          var hour = ('0'+date.getHours()).slice(-2)
          var minute = ('0'+date.getMinutes()).slice(-2)
          return hour+':'+minute
        }
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '20%'],
      splitLine: {
        show: false
      },
     
    },
    series: [
      {
        name: "Dataset 1",
        type: "line", // 线型图
        symbol: 'none',
        areaStyle: {
          color: 'rgb(234,184,57,0.5)',
          shadownColor: 'rgb(234,184,57,0.5)',
          opacity: 0.3
        },
        color: 'rgb(234,184,57,0.5)',
        data: data1, // 使用生成的 data1
      },
      {
        name: "Dataset 2",
        type: "line", // 线型图
        symbol: 'none',
        areaStyle: {
          color: 'rgb(234,184,57,0.5)',
          shadownColor: 'rgb(234,184,57,0.5)',
          opacity: 0.3
        },
        color: 'rgb(234,184,57,0.5)',
        data: data2, // 使用生成的 data2
      },
    ],
  };

  useEffect(() => {
    // 初始化 ECharts 实例
    const chartInstance = echarts.init(chartRef.current);

    // 将选项设置到实例中
    chartInstance.setOption(option);
    // 处理窗口大小变化
    const handleResize = () => {
      chartInstance.resize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, [data1, data2])
  return (

    <div className={className} ref={chartRef} />

  )
};

export default ChartCombo;
