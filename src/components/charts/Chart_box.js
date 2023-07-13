import React from 'react'
import './chart.css'
import Chart from "react-apexcharts";
import { useState } from 'react';
import {AiFillMedicineBox} from 'react-icons/ai'
import Barchart from '../Chart/Barchart';


const ChartBox = () => {
  const [state, setState] = useState({
    options: {
      colors: ["green","#green"],
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
    <div className='charts_container'>
    <div className='charts'>
        <span className='span'>In Training Workers</span>
        
         <div className='chart_item'>
         <span className='chart_span'>3,354
         
         <label style={{color:"green"}}><AiFillMedicineBox/>20%  234</label> 
         </span>
        <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="150"
            height="100"
          />
          </div>
          
          
      
    </div>
    <div className='charts'>
        <span className='span'>Video Watch-Time(Hrs)</span>
        <div className='chart_item'>
         <span className='chart_span2'>2,433
         
         <label style={{color:"red"}}><AiFillMedicineBox/>20%  435</label> 
         </span>
        <Barchart/>
          </div>
        
    </div>
    <div className='charts'>
        <span className='span'>%Workers Passing Quiz</span>
        <div className='chart_item'>
         <span className='chart_span'>95%
         
         <label style={{color:"green"}}><AiFillMedicineBox/>20%  24%</label> 
         </span>
        <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="150"
            height="100"
          />
          </div>
          
    </div>
    <div className='charts'>
        <span className='span'>Avg Days Taken</span>
        <div className='chart_item'>
         <span className='chart_span'>6
         
         <label style={{color:"green"}}><AiFillMedicineBox/>20%  3</label> 
         </span>
        <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="150"
            height="100"
          />
          </div>
          
    </div>


      
    </div>
  )
}

export default ChartBox
