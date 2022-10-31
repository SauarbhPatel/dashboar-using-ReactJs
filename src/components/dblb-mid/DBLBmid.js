import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import "./dblbmid.css";

const DBLBmid = () => {
  const [state, setState] = useState({
    series: [74, 25, 30],
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#3385ff", "#8C8C8C", "  #F94772"],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="chart-container">
      <div className="chart-head">
        <span>Order Status</span>
        <span style={{ color: "gray" }}>...</span>
      </div>
      <div className="dblb-pogress-bar-box">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          height={190}
          width={"100%"}
        />
      </div>
      <div className="dblb-text">
        <span style={{ color: "gray" }}>Completed</span>
        <span style={{ color: "gray" }}>Pending</span>
        <span style={{ color: "gray" }}>Cancel</span>
      </div>
    </div>
  );
};

export default DBLBmid;
