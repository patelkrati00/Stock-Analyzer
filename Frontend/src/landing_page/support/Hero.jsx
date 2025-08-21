import React from "react";

function Hero() {
  return (
    <>
      <div className="container " id="outerSection">
        <div className="row text-white " id="heroSection">
          <div className="col-7 " id="heroText">
            <h3 className="fs-4 mb-5">Support Portal</h3>
            <p className="fs-3 ">
              Search for an answer or browse help topics to create a ticket
            </p>
            <input
              type="text"
              placeholder="E.g how do i activate F&O, why is my order getting rejected.."
              className="text-muted"
            />
            <a href="" className="px-3">
              Track Account Opening
            </a>
            <a href="" className="px-3">
              Track Segment Activation
            </a>
            <a href="" className="px-3">
              Intraday Margins
            </a>
            <a href="" className="px-3">
              Kite user Manual
            </a>
          </div>

          <div className="col-5 px-5">
            <h6><a href="" className=" mt-5">
              Track Tickets
            </a></h6>
            <p className="fs-3 mt-5">Featured</p>
            <ol>
              <li>
                <a href="" className="">
                  Current Takeovers and DeListing - Janvary 2025
                </a>
              </li>
              <li>
                <a href="" className="">
                  Latest Intraday Leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
