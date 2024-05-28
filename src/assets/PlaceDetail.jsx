import React from 'react'
import '../styles/woravel.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PlaceDetail() {
  const {state} = useLocation();


  return (
    <div className='place-detail-wrapper'>
      <div className ="place-detail-header"> 
        <h2 >Woravel  -- </h2>
        <FontAwesomeIcon icon ="magnifying-glass" size="2x" style={{verticalAlign:"center", margin:"17px 15px"}}/>
      </div>
      <div className = "place-img-wrapper">
      {state.img_src.map((src, index) => (
          <img key={index} src={src} style={{ width: "413px", height: "197px" }} alt={`Image ${index}`}/>
        ))}
      </div>

      <div className ="place-info-wrapper">
        <div className ="name-saved-wrapper">
          <div className = "place-name-wrapper" style={{ marginTop: "20px",fontSize:"20px", fontWeight:"bold"}}>{state.name}</div>
          <div clasName = "place-saved-wrpper" style={{display:"flex"}}> 
            <div className = "detail-icon-wrapper"><FontAwesomeIcon icon = "message"/></div>
            <div className = "detail-icon-wrapper"><FontAwesomeIcon icon="share-nodes"/></div>
            <div className = "detail-icon-wrapper"><FontAwesomeIcon icon ="bookmark"/></div>
          </div>  
        </div>
        <div> {state.address} </div>
        <hr/>
        <div className = "narrative-info-wrapper">
            도토리도토리 설명설명 
        </div>
      </div>

      
    </div>
  )
}
