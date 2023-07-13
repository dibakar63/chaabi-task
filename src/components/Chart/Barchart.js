import React, { useState } from "react";
import Chart from "react-apexcharts";

const Barchart = () => {
    const [state, setState] = useState({
      options: {
        colors: ["red","red"],
        backgroundColors:["blue"],
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["M","T","W","Th","F"],
        },
      },
      series: [
        {
          name: "Workers Present",
          data: [30, 20,25,35,45],
        },
        
      ],
      });
  return (
    <div>
    <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="150"
            height="100"
          />
      
    </div>
  )
}

export default Barchart
