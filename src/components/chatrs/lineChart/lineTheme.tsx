

export interface LineOptionProps {
    x_data: Array<string>, //x轴节点数组
    seriesData: any //数据填充, 用于遍历后配置到option中的series
}

const mainColors = [
    'lightcoral',
    'lightblue', 
    'lightgreen',
    '#aaa',
    'lightgray'
]

// x,y节点标尺轴样式
const axisTick = {
    show: false
}
// x,y轴颜色配置
const lineStyle = {
    color: '#ccc'
}

// 获取配置项
export const getOptions = (option: LineOptionProps) => {
    const {x_data, seriesData} = option
    return {
        color: mainColors,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'right',
            y: 'bottom',
            height: '30px',
            padding: [0, 20, 0, 0],
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontSize: 10,
                color: mainColors,
            }
        },
        grid: {
            left: '3%',
            right: '20px',
            bottom: '30px',
            containLabel: true,
        },
        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: x_data,
            axisLine: {
                lineStyle
            },
            axisTick: axisTick,
           
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle
            },
            axisTick: axisTick,
            splitLine :{ 
                lineStyle:{
                    type:'dottet',
                },
                show:true
            }
        },
        series: seriesData.map((item: any) => ({
            type: 'line',
            name: item.name,
            data: item.data.map((d:any) => ({value: d, symbol: 'none'}))
        })),
       
    }
}