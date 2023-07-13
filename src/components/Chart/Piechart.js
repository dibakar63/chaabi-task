import {Chart as Chartjs,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chartjs.register(ArcElement,Tooltip,Legend);

const PieChart=()=>{
    const data={
        labels:['Yes','No'],
        datasets:[{
            label:'Poll',
            data:[3,6,4,2,5],
            backgroundColor:['skyblue','white',"white","white","white"],
            borderColor:['skyblue','black','black','black','black']
        }]
        
    }
    const options={}
    const textCenter={
        id:'textCenter',
        beforeDatasetDraw(chart,args,pluginOptions){
            const {ctx,data}=chart;
            ctx.save();
            ctx.font='bolder 7px sans serif';
            ctx.textAlign='center';
            ctx.fillText('Finshed training',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
        }
    }
    return(
        <div className='pie'>
            <Doughnut  options={options} data={data} plugins={[textCenter]}></Doughnut>
        </div>
    )
}
export default PieChart