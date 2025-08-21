import React from "react";

function Brokerage() {
  return (
    <>
      <div className="container mb-5 border-bottom">
        <div className="row border-top ">
          <div className="col-8 p-4 mt-5 ">
            <a href="" style={{textDecoration:"none"}}>
              <h3 className="text-center">Brokerage Calculator</h3>
            </a>
            <ul className="text-muted p-5 " style={{lineHeight:"2.5", fontSize:"1.2rem"}}>
              <li>
                Our brokerage structure includes additional charges of ₹50 + GST
                per order for Call & Trade and RMS auto-squareoff services.
              </li>

              <li>
                Digital contract notes are provided free of charge via email,
                while physical copies are available for ₹20 per contract note
                plus courier charges.
              </li>

              <li>
                For NRI accounts, non-PIS equity orders are charged 0.5% or ₹100
                per executed order (whichever is lower), while PIS accounts are
                charged 0.5% or ₹200 per executed order (whichever is lower).
              </li>

              <li>
                Please note that if your account has a debit balance, orders
                will be charged ₹40 per executed order instead of the standard
                ₹20 rate
              </li>
            </ul>
          </div>

          <div className="col-4 p-4 mt-5 ">
             <a href="" style={{textDecoration:"none"}}>
              <h3 className="text-center">List of Charges</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
