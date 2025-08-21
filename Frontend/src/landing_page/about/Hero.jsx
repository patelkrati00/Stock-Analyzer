import React from 'react'

function Hero() {
    return ( 
       <>
       <div className="container mt-5">
        <div className="row mb-5">
            <h1 className='fs-2 text-center'>We pioneered the discount broking model in India. <br /> Now, we are breaking ground with our technology.</h1>
        </div>

        <div className="row mt-5 border-top text-muted" style={{fontSize:"1.15rem",lineHeight:"1.95rem"}}>
           <div className="col p-5" >
            <p >We kick-started operations on the 15th of August, 2010, with the goal of eliminating the barriers traders and investors face in India—whether in cost, support, or technology. The name Zerodha reflects this mission, combining Zero and Rodha (the Sanskrit word for barrier).</p>

            <p>Today, our disruptive pricing models and in-house technology have made us the largest stock broker in India.</p>

            <p>With over 1+ Crore clients placing millions of orders daily through our powerful ecosystem of investment platforms, we contribute to more than 15% of all Indian retail trading volumes</p>
           </div>
           <div className="col p-5">
            <p>Beyond broking, we drive multiple open online educational and community initiatives to empower retail traders and investors with knowledge and tools.</p>

            <p>Through Rainmatter, our fintech fund and incubator, we support and invest in startups that share our vision of expanding India’s capital markets.</p>

            <p>And we’re just getting started—there’s always something new brewing! Stay updated with our latest innovations on our blog or see what the media is saying about us.</p>
           </div>
        </div>
       </div>
       </>
     );
}

export default Hero;