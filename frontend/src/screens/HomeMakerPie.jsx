import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Header from "../components/Header3";
//import { chartColors } from "./colors";

import "../index.css";

const options = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function(chart) {
      // Return the HTML string here.
      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>
      ];
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["Accepted", "Rejected", "Pending"],
  datasets: [
    {
      data: [15, 5, 2],
      backgroundColor: [
                 '#B21F00',
                 '#C9DE00',
                 '#2FDE00',
               ],
      hoverBackgroundColor: ['#501800',
            '#4B5000',
            '#175000',]
    }
  ]
};

const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "No of Users signed in per day",
        data: [4, 5, 8, 6, 3, 6],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

const dashboard = () => {
  let chartInstance = null;

  // useEffect(() => {
  //   const legend = chartInstance.chartInstance.generateLegend();
  //   console.log(chartInstance, "textinput");
  //   console.log(legend);
  //   document.getElementById("legend").innerHTML = legend;
  // }, [chartInstance]);

  return (
    <div>
    <Header />
    <div className="App">
      <h1>HomeMaker Registrations</h1>
      <div style={styles.relative}>
        <div style={styles.pieContainer}>
          <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          /> 
          {/* <h1>No of Users signedIn/day</h1>
          <Line data={lineData} /> */}
        </div>
        <div id="legend" />
      </div>
    </div>
    </div>
  );
}

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

export default dashboard
