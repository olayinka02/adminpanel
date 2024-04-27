import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; 
import { ChartOptions } from "chart.js";

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1.1,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 6,
        boxHeight: 6,
        usePointStyle: true, 
      },
    },
    title: {
      display: true,
      text: "Transaction Report",
      align: "start",
      padding: {
        top: 4,
        bottom: -10,
      },
      font: {
        size: 13,
        family: "'Jost', sans-serif",
      },
    },
  },


  scales: {
    x: {
      ticks: {
        color: "#606060",
      },
      grid: {
        color: "#E2E2E2",
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#606060",
      },
      grid: {
        color: "#373737",
        lineWidth: 0.9,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function LineDemo() {
  const data = {
    labels,
    datasets: [
      {
        label: "Debit",
        data: [1, 2, 3,7,9,3,5,9,1,9,3,10],
        borderColor: "#605F5F",
        backgroundColor: "#605F5F",
        borderWidth: 1.5,
        hitRadius: 0.1,
        tension: 0.5,
        pointStyle: "circle", 
        pointRadius: 1,
      },
      {
        label: "Credit",
        data: [1, 4, 9, 4,8,3.4,9,4,8],
        borderColor: "#F1D017",
        backgroundColor: "#F1D017",
        borderWidth: 1.5,
        tension: 0.5,
        pointStyle: "circle",
        pointRadius: 1,
      },
    ],
  };

  useEffect(() => {
    Chart.defaults.font.family = "'inter', sans-serif";
  }, []);

  return (
    <div className="w-full h-full">
      <Line options={options as any} data={data} />
    </div>
  );
}

export default LineDemo;
