
import React,{useState} from 'react';
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
    <div className="CompactCard">
      <div className="radialBar">
        chart
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
