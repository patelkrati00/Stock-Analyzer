import React from 'react'

function Pricing() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-4">
                        <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                        <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="" className=' fs-5' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6 mb-5">
                        <div className="row text-center ">
                            <div className="col border p-4">
                                <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                                <p>Free Equity delivery and <br/> direct mutual funds</p>
                            </div>

                             <div className="col border p-4">
                                <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                                <p>Intraday F&0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;