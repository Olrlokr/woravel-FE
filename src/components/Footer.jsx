import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import "../assets/FontAwesome";

export default function Footer() {

    const [activeNav, setActiveNav] = useState(1);
  return (
    <div className ='footer-wrap'>
        <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}> 
            <div>
                <FontAwesomeIcon
                icon ="laptop"
                className={activeNav === 1 ? "nav-item active" : "nav-item"}/>
            </div>
        </Link>
        <Link to = "/travel" className ="nav-link" onClick={() => setActiveNav(2)}>
            <div>
                <FontAwesomeIcon 
                icon="suitcase"
                className={activeNav === 2 ? "nav-item active" : "nav-item"}/>
                </div>
        </Link>
        <Link to = "/community" className ="nav-link" onClick={() => setActiveNav(3)}>
            <div>
                <FontAwesomeIcon
                icon = "comments"
                className={activeNav === 3 ? "nav-item active" : "nav-item"}/>
            </div>
        </Link>
        <Link to = "/calendar" className ="nav-link" onClick={() => setActiveNav(4)}>
            <div>
                <FontAwesomeIcon 
                icon="calendar"
                className={activeNav === 4 ? "nav-item active" : "nav-item"}/>  
            </div>
        </Link>
        <Link to = "/mypage" className ="nav-link" onClick={() => setActiveNav(5)}>
            <div>
                <FontAwesomeIcon 
                icon="user"
                className={activeNav === 5 ? "nav-item active" : "nav-item"}/>
            </div>
        </Link>
    </div>
  )
}
