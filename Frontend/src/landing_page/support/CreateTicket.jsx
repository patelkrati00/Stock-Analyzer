import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import all solid icons

// Add all solid icons to library
library.add(fas);

import RelevantTopic from "./RelevantTopic";

function CreateTicket() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h2>To create a ticket, select a relevant option</h2>
          <div className="col-4">
            {" "}
            <RelevantTopic
              icon="circle-plus" // Using a valid icon
              heading="Account Opening"
              title1="Online Account Opening"
              title2="Offline Account Opening"
              title3="Company, Partership and HUf Account Opening"
              title4="NRI Account Opening"
              title5="Charges at Zerodha"
              title6="Zerodha IDFC FIRST Bank"
              title7="Getting Started"
            />
          </div>

          <div className="col-4">
            {" "}
            <RelevantTopic
              icon="user" // Using a valid icon
              heading="Your Zerodha Account"
              title1="Online Account Opening"
              title2="Offline Account Opening"
              title3="Company, Partership and HUf Account Opening"
              title4="NRI Account Opening"
              title5="Charges at Zerodha"
            />
          </div>

          <div className="col-4">
            <RelevantTopic
              icon="chart-column" // Using a valid icon
              heading="Your Zerodha Account"
              title1=" Margin/leverage, Product and Order types  "
              title2="Kite Web and Mobile"
              title3="Trading FAQs"
              title4="Corporate Actions"
              title5="Stockreports+ "
              title6="Pi and other platforms"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            {" "}
            <RelevantTopic
              icon="credit-card" // Using a valid icon
              heading="Funds"
               title1=" Margin/leverage, Product and Order types  "
              title2="Kite Web and Mobile"
              title3="Trading FAQs"
              title4="Corporate Actions"
              title5="Stockreports+ "
              title6="Pi and other platforms"
            />
          </div>

          <div className="col-4">
            {" "}
            <RelevantTopic
              icon="circle-notch" // Using a valid icon
              heading="Console"
               title1=" Margin/leverage, Product and Order types  "
              title2="Kite Web and Mobile"
              title3="Trading FAQs"
              title4="Corporate Actions"
              
            />
          </div>

          <div className="col-4">
            {" "}
            <RelevantTopic
              icon="circle" // Using a valid icon
              heading="Coin"
               title1=" Margin/leverage, Product and Order types  "
              title2="Kite Web and Mobile"
              title3="Trading FAQs"
              title4="Corporate Actions"
              title5="Stockreports+ "
              title6="Pi and other platforms"
                title7="Getting Started"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateTicket;
