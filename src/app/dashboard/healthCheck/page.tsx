'use client'
import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function View1() {
  const chartRef = useRef<HTMLDivElement>(null)

  const mockData = {
    name: 'Systems',
    children: [
      {
        name: 'Payment Services',
        children: [
          {
            name: 'Payment Gateway Cluster',
            children: [
              {
                name: 'Gateway Node 1',
                value: 850,
                tps: 850,
              },
              {
                name: 'Gateway Node 2',
                value: 920,
                tps: 920,
              }
            ]
          },
          {
            name: 'Transaction Processing Cluster',
            children: [
              {
                name: 'Transaction Node 1',
                value: 420,
                tps: 420,
              },
              {
                name: 'Transaction Node 2',
                value: 380,
                tps: 380,
              }
            ]
          }
        ]
      },
      {
        name: 'User Services',
        children: [
          {
            name: 'Auth Cluster',
            children: [
              {
                name: 'Auth Node 1',
                value: 630,
                tps: 630,
              },
              {
                name: 'Auth Node 2',
                value: 580,
                tps: 580,
              }
            ]
          },
          {
            name: 'Profile Service Cluster',
            children: [
              {
                name: 'Profile Node 1',
                value: 320,
                tps: 320,
              },
              {
                name: 'Profile Node 2',
                value: 290,
                tps: 290,
              }
            ]
          }
        ]
      },
      {
        name: 'Order System',
        children: [
          {
            name: 'Order Processing Cluster',
            children: [
              {
                name: 'Order Node 1',
                value: 680,
                tps: 680,
              },
              {
                name: 'Order Node 2',
                value: 720,
                tps: 720,
              }
            ]
          },
          {
            name: 'Inventory Cluster',
            children: [
              {
                name: 'Inventory Node 1',
                value: 450,
                tps: 450,
              },
              {
                name: 'Inventory Node 2',
                value: 410,
                tps: 410,
              }
            ]
          }
        ]
      }
    ]
  }

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)

    const option = {
      title: {
        text: 'System TPS Monitor',
        left: 'center',
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {
        formatter: function (info: any) {
          const value = info.value
          const tps = info.data.tps
          if (tps) {
            return [
              `<div>${info.name}</div>`,
              `TPS: ${tps}`
            ].join('')
          }
          return info.name
        }
      },
      series: [{
        name: 'System TPS',
        type: 'treemap',
        data: mockData.children,
        width: '100%',
        height: '100%',
        roam: false,
        nodeClick: false,
        breadcrumb: { show: false },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
          gapWidth: 1,
        },
        label: {
          show: true,
          formatter: function (params: any) {
            const tps = params.data.tps
            if (tps) {
              return `${params.name}\n${tps} TPS`
            }
            return params.name
          }
        },
        levels: [{
          itemStyle: {
            borderColor: '#555',
            borderWidth: 4,
            gapWidth: 4
          }
        }, {
          itemStyle: {
            borderColor: '#666',
            borderWidth: 2,
            gapWidth: 2
          }
        }, {
          itemStyle: {
            borderColor: '#777',
            borderWidth: 1,
            gapWidth: 1
          }
        }],
        color: function (params: any) {
          const tps = params.data.tps || 0
          if (tps >= 800) return '#d94e5d'  // 红色 - 危险
          if (tps >= 500) return '#eac736'  // 黄色 - 警告
          return '#50a3ba'                   // 蓝色 - 正常
        }
      }]
    }

    chart.setOption(option)

    const resizeHandler = () => {
      chart.resize()
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
      chart.dispose()
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div className="h-full w-full p-2">
      <div ref={chartRef} className="w-full h-full" />
    </div>
  )
}
