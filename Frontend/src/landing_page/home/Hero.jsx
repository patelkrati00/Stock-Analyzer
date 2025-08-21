import React from 'react'

function Hero() {
    return (
        <>
            <div className="container mb-5  ">
                <div className="row text-center ">
                    <img src="/media/images/homeHero.png" alt="Hero image" className='mb-5' />

                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks,derivatives,mutual funds</p>
                    <button className=' m-auto p-2 fs-5 btn btn-primary ' style={{width:"20%"}}>SignUp Now</button>
                </div>
            </div>
        </>
    );
}

export default Hero;