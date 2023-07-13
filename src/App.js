
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChartBox from './components/charts/Chart_box';

import Footerchart from './components/charts/Footerchart';
import ContentChart from './components/charts/Contentchart';

function App() {
  return (
    <div className="App">
    
    <Sidebar/>
    <div className='container'>
      <Header/>
      <div className='chart_container'>
         <div className='chart_box'>
          <ChartBox/>
          
          
         </div> 
         <div>
          <ContentChart/>
         </div>
         <div>
          <Footerchart/>
         </div>
      </div>
    </div>
      
    
      
    </div>
  );
}

export default App;
