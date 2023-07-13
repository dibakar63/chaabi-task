import React, { useState } from "react";
import Chart from "react-apexcharts";
import './chart.css'
import  PieChart  from "../Chart/Piechart";
//import { PieChart } from "../Chart/Piechart";

const ContentChart = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#5DF4FF","5DF4FF"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["3Jun","4Jun","5Jun","6Jun","7Jun","8Jun","9Jun","10Jun","11Jun","12Jun","13Jun","14Jun"],
      },
    },
    series: [
      {
        name: "Workers Present",
        data: [30, 20,25,35,45,50,35,30,20,35,40,45],
      },
      
    ],
  });
  
  
  return (
    <div className='piechart_container'>
    <div className='piechart'>
    <div className="conteni_span">
        <span className='span'>Chapter Wise Status</span>
    </div>
    <div className="pie">
     <PieChart />
     <ul className="pie_ul">
      <li className="pie_list">Finished Training</li>
      <li className="pie_list">Chapter A</li>
      <li className="pie_list">Chapter B</li>
      <li className="pie_list">Chapter C</li>
      <li className="pie_list">Haven't started</li>
     </ul>
     </div>
        
        
    </div>
    <div className='barchart'>
    <div className='content_span'>
    <span className='span'>Last 14 Days Active Workers in Training</span>
    <span className='span'>Last 14 Days </span>
    
    
    </div>
    <div className="barchart_chart">
    <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="800"
            height="170"
          />
          </div>
    </div>
      
    </div>
  )
}

export default ContentChart
