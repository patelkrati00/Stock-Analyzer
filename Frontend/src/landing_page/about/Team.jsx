import React from 'react'

function Team() {
    return ( 
 <>
       <div className="container mt-5 mb-5">
        <div className="row mb-5 border-top">
            <h1 className='fs-2 text-center pt-5'>People</h1>
        </div> 

        <div className="row mt-5  text-muted" style={{fontSize:"1.15rem",lineHeight:"1.95rem"}}>

           <div className="col p-5 text-center" >
           <img src="/media/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%",width:"50%"}} className='mb-3'/>
           <h4>Nitin Kamath</h4>
           <h6>Founder, CEO</h6>
           </div>
           <div className="col p-5">
            <p>Nithin Kamath bootstrapped and founded Zerodha in 2010 to solve the challenges he faced during his decade-long journey as a trader. Today, Zerodha has revolutionized India's broking industry with its disruptive approach.</p>

            <p>As an active contributor to market development, Nithin serves on SEBI's Secondary Market Advisory Committee (SMAC) and Market Data Advisory Committee (MDAC).</p>

            <p>Off the trading screens, he finds his zen on the basketball court.</p>

            <p >Connect on <a href=""style={{textDecoration:"none"}}>Homepage</a>  / <a href=""style={{textDecoration:"none"}}>TradingQnA</a>  / <a href=""style={{textDecoration:"none"}}>Twitter</a></p>
           </div>
        </div>
       </div>
       </>     );
}

export default Team;