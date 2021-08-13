import React from "react";
import { useEffect, useRef } from "react";
import { historyOptions } from "../chartConfigs/chartConfigs";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: day,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div></div>
      <div>
        <canvas ref={chartRef} id="myChart" width={200} height={200}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
