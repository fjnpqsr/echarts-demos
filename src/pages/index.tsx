import React, {useState, useEffect} from 'react';
import './index.less';
import {LineChart} from '../components/chatrs'


// s数据结构如下


const RealTimeChartOpts = {
  x_data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  seriesData: [
    {
      name: 'Real-time Face',
      data: [100, 620, 431,354, 382, 123, 132, 333]
    }
  ]
}
const RvehicleChartOpts = {
  x_data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  seriesData: [
    {
      name: 'Rvehicle',
      data: []
    },
    {
      name: 'Face',
      data: []
    }
  ]
}

function getRandomData() {
  let data = []
  for (let i = 0; i<7; i++) {
    data.push(Math.floor(Math.random() * 100))
  }
  return data
}

function getSimRvehicleData () {
  return {
    x_data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    seriesData: [
      {
        name: 'Rvehicle',
        data: getRandomData()
      },
      {
        name: 'Face',
        data: getRandomData()
      }
    ]
  }
}


export default () => {

  const [rvehicleOpts, setRvehicleOpts] = useState(RvehicleChartOpts)
  useEffect(() => {
    setTimeout(() => {
      const data:any = getSimRvehicleData()
      setRvehicleOpts(data)
    }, 1000)

    let rvehicleTimer = setInterval(() => {
      const data:any = getSimRvehicleData()
      setRvehicleOpts(data)
    }, 3000)
    return () => {
       clearInterval(rvehicleTimer)
    }
  }, [])

  return (
    <div>
      charts demo
      <div className="infos-left">
        <LineChart 
          option={rvehicleOpts}
        />
         <LineChart 
          option={RealTimeChartOpts}
        />
      </div>
    </div>
  );
}
