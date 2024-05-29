import React, { useState } from 'react'
import '../styles/main.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function PlaceDetail() {
  const {state} = useLocation();
  const [savePlace,setSavePlace] = useState(0);

  const toggleSavePlace = () => {
    setSavePlace(prevSavePlace => (prevSavePlace === 0 ? 1 : 0));
  };



  return (
    <div className='place-detail-wrapper'>
      <div className = "place-img-wrapper">
      {state.img_src.map((src, index) => (
          <img key={index} src={src} style={{ width: "100%", height: "197px" }} alt={`${index}`}/>
        ))}
      </div>

      <div className ="place-info-wrapper">
        <div className ="name-saved-wrapper">
          <div className = "place-name-wrapper" style={{ marginTop: "20px",fontSize:"20px", fontWeight:"bold"}}>{state.name}</div>
          <div clasName = "place-saved-wrpper" style={{display:"flex"}}> 
            <div className = "detail-icon-wrapper">
            <FontAwesomeIcon icon="fa-regular fa-message" 
              size = "2x"/>
              
              </div>
            <div className = "detail-icon-wrapper">
              <FontAwesomeIcon icon="share-nodes"
              size = "2x"/>
              </div>
            <div className = "detail-icon-wrapper" onClick={toggleSavePlace}>
              {savePlace === 0 ? (
                <FontAwesomeIcon icon={['far', 'bookmark']} size="2x" />
              ) : (
                <FontAwesomeIcon icon={['fas', 'bookmark']} size="2x" />
              )}
              </div>
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
