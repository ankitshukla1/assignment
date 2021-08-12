import React from "react";
import {Bar} from 'react-chartjs-2';

const BarChart = (props) => {
  const { labels, graphData } = props;

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: 'Tickets',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: graphData
          }
        ]
      }}
      options={{
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
  )
}

export default React.memo(BarChart);