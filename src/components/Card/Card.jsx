
import React,{useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {AnimateSharedLayout} from 'framer-motion'
import {UilTimes} from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import './Card.css'

function Card(props) {
  const [expanded,setExpanded]= useState(false)

  return (
    <AnimateSharedLayout>
      {expanded?<ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:<CompactCard param ={props} setExpanded={()=>setExpanded(true)} />}
    </AnimateSharedLayout>
  );
}
function CompactCard({param,setExpanded}){
  const Png=param.png;
  return (
    <div className="CompactCard"
      style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }
    }
    onClick={setExpanded}
    >
      <div className="radialBar">
       <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} />
       <span>{param.title}</span>
      </div>
      
   
    <div className="detail">
<Png/>
<span><span>$</span>{param.value}</span>
<span>Last 24Hrs</span>
    </div>
    </div>
  )
}
function ExpandedCard({param,setExpanded}){
  const data = {
    options: {
       chart:{
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35
    },
      fill: {
        colors: ["#fff"],
        opacity: 0.9,
        type: 'gradient',
        
        },
        dataLabels: {
          enabled: false,
         
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            
            width: 2,
                
        },
        tooltip: {
          enabled: true,
          onDatasetHover: {
              highlightDataSeries: true,
          },
          x: {
              show: true,
              format: 'dd MMM yy HH:mm',
              
          },
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 0,
          position: 'back',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:000Z",
        "2018-09-19T01:30:000Z",
        "2018-09-19T02:30:000Z",
        "2018-09-19T03:30:000Z",
        "2018-09-19T04:30:000Z",
        "2018-09-19T05:30:000Z",
        "2018-09-19T06:30:000Z"
        
      ],},
  }}
  
  return(
    <div className="ExpandedCard" 
    style={{
      background:param.color.backGround,
      boxShadow:param.color.boxShadow
    }
  }
    > 
    <div>
    <UilTimes onClick={setExpanded}/>
    </div>
    <span>{param.title}</span>
    <div className="ChartContainer">
     
      <Chart series={param.series} type='area' options={data.options}/>
    </div>
    <span>Last 24 hours</span>
    </div>
   
  )

}

export default Card;
