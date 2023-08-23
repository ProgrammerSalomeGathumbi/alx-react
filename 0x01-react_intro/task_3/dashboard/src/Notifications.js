import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png"
import { getLatestNotification} from "./utilis"

function Notifications() {
  return (
     <div className="Notifications">
      <button>
        style={{right: "2px", top: "2px"}}
        aria-label: "Close"
        onClick={console.log("Close button has been clicked")}
        <img src={closeIcon} alt="closeIcon"/>
        </button>
       <p>Here is the list of notifications</p>
       <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification }}></li>
        </ul>
       </div>		  
  );
}

export default Notifications;
