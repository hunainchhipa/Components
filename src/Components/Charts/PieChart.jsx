import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = (props) => {
  const [chartData, setChartData] = useState({
    series: [60, 35, 15],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      legend: {
        position: "bottom",
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
