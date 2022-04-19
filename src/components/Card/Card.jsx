
import React,{useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {AnimateSharedLayout} from 'framer-motion'
import './Card.css'

function Card(props) {
  const [expanded,setExpanded]= useState(false)

  return (
    <AnimateSharedLayout>
      {expanded?'<ExpandedCard/>':<CompactCard param ={props} setExpanded />}
    </AnimateSharedLayout>
  );
}
function CompactCard({param}){
  const Png=param.png;
  return (
    <div className="CompactCard"
      style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }
    }>
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

export default Card;
