import React from "react";
// import "./dblm-left.css";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const DblmBar = () => {
    const [state, setState] = useState({
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, ],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
       
        fill: {
          opacity: 1
        },
       
      },
    
      });
  return (
    <div className="dblm-bar">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={240}
        width={'100%'}
      />
    </div>
  );
};

export default DblmBar;
