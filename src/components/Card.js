import React from 'react'
export default function Card(props){
  return (
  <div className='card'>
    
     <img src={`${props.coverImg}`}  className='card--image'/>
     <div className='card--info'>
     <span>
     <img src={`${props.locationImg}`} className='location--img'/>
     <span>{props.location}</span>
     </span>
     <h1 className='card--title'>{props.title}</h1>
     <p className='card--date'>{props.date}</p>
     <p className='card--desc'>{props.description}</p>
     </div>
  </div>
  )
}