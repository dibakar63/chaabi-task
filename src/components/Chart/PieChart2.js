import {Chart as Chartjs,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import './pie.css'
Chartjs.register(ArcElement,Tooltip,Legend);

const PieChart2=()=>{
    const data={
        labels:['Passed','Failed'],
        datasets:[{
            label:'Poll',
            data:[4,6],
            backgroundColor:['red','green'],
            borderColor:['red','green']
        }]
        
    }
    const options={}
    
    return(
        <div className='pie2'>
            <Doughnut style={{height:"15vh"}} options={options} data={data} ></Doughnut>
        </div>
    )
}
export default PieChart2