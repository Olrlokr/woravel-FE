import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/calendar.css'


export default function Calendar() {
  const renderDayCellContent = (info) => {
    let number = document.createElement("a");
    number.classList.add("fc-daygrid-day-number");
    number.innerHTML = info.dayNumberText.replace("일", "");
    if (info.view.type === "dayGridMonth") {
      return { html: number.outerHTML };
    }
    return {
      domNodes: []
    };
  };
  
  

  return (
    <div>
      <FullCalendar 
          defaultView="dayGridMonth" 
          plugins={[ dayGridPlugin ]}
          height="auto"
          locale="ko"
          dayCellContent={renderDayCellContent}
        />

      <div className = "plan-wrapper">
        <div>Working Planning</div>
        <button className ="plan-box-btn">
          <div className ="plan-plus-wrapper">+</div>
        </button>
      </div>


      <div className = "plan-wrapper">
        <div>Travel Planning</div>
        <button className ="plan-box-btn" style={{border:"2px solid #B2DEFC"}}>
          <div className ="plan-plus-wrapper">+</div>
        </button>
      </div>



    </div>
  )
}
