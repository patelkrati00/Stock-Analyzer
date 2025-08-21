import React from "react";

function Hero() {
  return (
    <>
      <div className="container mb-5 p-5 border-bottom ">
        <div className="text-center border-bottom mt-5 mb-5">
          <h1>Pricing</h1>
          <h4 className="text-muted mb-5 mt-3 fs-5">
            Free Equity investments and flat ₹20 intraday and F&O trades
          </h4>
        </div>

        <div className="row text-center">
          <div className="col-4 p-4 ">
            <img src="/media/images/pricingEquity.svg" alt="" />
            <h1 className="fs-2">Free equity delivery</h1>
            <p className="text-muted fs-5 mt-4">
              All equity delivery investments (NSE, BSE) are absolutely free — ₹
              0 brokerage.
            </p>
          </div>

          <div className="col-4 p-4 ">
            <img src="/media/images/intradayTrades.svg" alt="" />
            <h1 className="fs-2">Intraday and F&O trades</h1>
            <p className="text-muted fs-5 mt-4">
             Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
            </p>
          </div>

          <div className="col-4 p-4 ">
            <img src="/media/images/pricingEquity.svg" alt="" />
            <h1 className="fs-2">Free equity delivery</h1>
            <p className="text-muted fs-5 mt-4">
              All equity delivery investments (NSE, BSE) are absolutely free — ₹
              0 brokerage.
            </p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Hero;
