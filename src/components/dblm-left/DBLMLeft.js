import React from "react";
import "./dblm-left.css";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";


const DBLMLeft = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Current",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Previous",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="chart-container">
      <div className="chart-head">
        <span>User Activity</span>
        <span style={{ color: "gray", fontSize: "12px" }}>Weekly <BiChevronDown/></span>
      </div>
      <div className="">
        <p style={{ color: "gray", fontSize: "15px" }}>This month</p>
        <h4 style={{ fontWeight: "800" }}>15,643</h4>
      </div>
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={190}
          width={'100%'}
        />
      </div>
    </div>
  );
};

export default DBLMLeft;
