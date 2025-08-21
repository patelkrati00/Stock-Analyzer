import React from 'react'

function Awards() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 p-5"><img src="\media\images\largestBroker.svg" alt="" /></div>
                    <div className="col-6 p-5">
                        <h1 className='mt-4'>Largest Stock Broker in India</h1>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>
                        <div className='row mt-5'>
                            <div className="col"> <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodities derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul></div>
                            <div className="col">  <ul>
                                <li><p>Stocks and IPOs</p> </li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Direct mutual funds</p></li>
                            </ul></div>

                            <img src="\media\images\pressLogos.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Awards;