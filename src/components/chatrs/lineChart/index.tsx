import React, {FC} from 'react'
import ReactEcharts from "echarts-for-react";
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import {getOptions, LineOptionProps} from './lineTheme'



interface LineChartProps {
    option: LineOptionProps,
}

const LineChart:FC<LineChartProps> = (props) => {
    const {option} = props
    return (
        <ReactEcharts
            option={getOptions(option)}
            notMerge={true}
            lazyUpdate={true}
            // theme={"theme_name"}
            // onChartReady={null}
            // onEvents={}
            // opts={} 
        />
    )
}

export default LineChart