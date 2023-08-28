import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png"
import { getLatestNotification} from "./utils"

function Notifications() {
  return (
     <div className="Notifications">
      <p style={{right: "2px", top: "2px", display: "inline"}}>Here is the list of notifications</p>
        
      <button
            aria-label: "Close"
        onClick={console.log("Close button has been clicked")}>
        <img src={closeIcon} alt="closeIcon"/>
        </button>
       
       <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification }}></li>
        </ul>
       </div>		  
  );
}

export default Notifications;
