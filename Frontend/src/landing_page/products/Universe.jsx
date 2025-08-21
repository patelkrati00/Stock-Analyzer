import React from "react";

function Universe() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="text-center ">
          <h2>The Zerodha Universe</h2>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row ">
          <div className="col-4 mt-5 text-center">
            <img src="\media\images\smallcaseLogo.png" style={{width:"60%"}} alt="" />
            <p className="p-3 text-muted">Thematic investment platform</p>
          </div>
          <div className="col-4 mt-5 text-center">
            <img src="\media\images\streakLogo.png" style={{width:"50%"}} alt="" />
            <p className="p-3 text-muted">Algo and strategy platform</p>
          </div>
          <div className="col-4 mt-5 text-center">
            <img src="\media\images\sensibullLogo.svg" style={{width:"50%"}} alt="" />
            <p className="mt-5 text-muted">Options trading platforms</p>
          </div>
        
        </div>

         <div className="row">
            {/* \media\images\streakLogo.png */}
          <div className="col-4 mt-5 text-center">
            <img src="\media\images\zerodhaFundhouse.png" style={{width:"60%"}} alt="" />
            <p className="p-3 text-muted">Asset Management</p>
          </div>
          <div className="col-4 mt-5 text-center">
            <img src="\media\images\goldenpiLogo.png" style={{width:"60%"}} alt="" />
            <p className="p-3 text-muted">Bonds training platform platform</p>
          </div>
          <div className="col-4 mt-5 text-center">
            <img src="\media\images\dittoLogo.png" style={{width:"40%"}} alt="" />
            <p className="p-3 text-muted">Insurance</p>
          </div>
        <button className=' m-auto p-2 fs-5 btn btn-primary ' style={{width:"20%"}}>SignUp Now</button>
        </div>
      </div>
    </>
  );
}

export default Universe;
