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

const lineData = {
    labels: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "No of orders per day",
        data: [2, 3, 4, 3, 5, 2, 4],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  const mystyle = {
    color: "dark",
    //backgroundColor: "D",
    padding: "10px",
    fontFamily: "AbrilFatface-Regular"
  };

const salesdashboard = () => {
  let chartInstance = null;

  return (
    <div>
    <Header />
    <div className="App">
      <h1 style={mystyle}>Number of Orders per day</h1>
      <div style={styles.relative}>
        <div style={styles.pieContainer}>
        <Line
            data={lineData}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
        /> 
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

export default salesdashboard
