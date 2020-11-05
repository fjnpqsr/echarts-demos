import React from 'react';
import './index.less';
import {LineChart} from '../components/chatrs'


// s数据结构如下

const RvehicleChartOpts = {
  x_data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  seriesData: [
    {
      name: 'Rvehicle',
      data: [100, 620, 431 ,354, 382, 123, 132, 333]
    },
    {
      name: 'Face',
      data: [322, 820, 131 ,987, 768, 874, 654, 356]
    }
  ]
}

const RealTimeChartOpts = {
  x_data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  seriesData: [
    {
      name: 'Real-time Face',
      data: [100, 620, 431,354, 382, 123, 132, 333]
    }
  ]
}

export default () => {
  return (
    <div>
      charts demo
      <div className="infos-left">
        <LineChart 
          option={RvehicleChartOpts}
        />
         <LineChart 
          option={RealTimeChartOpts}
        />
      </div>
    </div>
  );
}
