import React from 'react'
import './chart.css'
import {AiOutlineArrowUp} from 'react-icons/ai'
import PieChart2 from '../Chart/PieChart2'
import { useState } from 'react'
import Chart from "react-apexcharts";

const Footerchart = () => {
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
    <div className='footer_container'>
    <div className='footer_content'>
        <span className='span'>Monthly Training Activity</span><br/>
        <span className='span_info'><AiOutlineArrowUp style={{color:"green"}}/>16% more enrolles this month</span><br/>
        <input type='radio'/><span className='span_header'>course a</span>
        <br/>
        <span className='span_info'>
            23 Workers Took This Course This Week
        </span>
        <br/>
        <input type='radio'/><span className='span_header'>course b</span>
        <br/>
        <span className='span_info'>
            23 Workers Took This Course This Week
        </span>
        <br/>
        <input type='radio'/><span className='span_header'>course c</span>
        <br/>
        <span className='span_info'>
            23 Workers Took This Course This Week
        </span>
        <br/>
        <input type='radio'/><span className='span_header'>course d</span>
        <br style={{paddingBottom:"3px"}}/>
        <span className='span_info'>
            23 Workers Took This Course This Week
        </span>

    </div>
    <div className='footer_piechart'>
        <span className='span'>Quiz Passing %</span>
        <PieChart2/>
    </div>
    <div className='footer_barchart'>
    <div className='footer_span'>
        <span className='span'>Daily Training Completion</span>
        <span className='span'>Last 7 Days</span>
        </div>
        <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="460"
            height="160"
          />
    
        
    </div>
    </div>
      
    
  )
}

export default Footerchart
