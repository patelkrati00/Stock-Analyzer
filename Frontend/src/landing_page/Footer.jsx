import React from "react";

function Footer() {
  return (
    <footer style={{
  backgroundColor: "#f8f9fa",
  borderTop: "3px solid rgba(239, 245, 248, 1)"
}}>

    <div className="container mt-5 ">
      <div className="row mt-5">
        <div className="col">
          <img src="/media/images/logo.svg" alt="" style={{ width: "50%" }} />
          <p className="mt-3">&copy; 2010-2024, Not Zerodha broking Ltd. <br /> All rights preserved</p>
        </div>
        <div className="col ">
          <p>Company</p>
          <a href="" className="text-muted  mb-3 d-inline-block"  style={{textDecoration:"none"}}>About </a> <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Product </a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Pricing</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Referral programme</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Carreers</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Zerodha.tech</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Press & media</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Zerodha cares</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Contact </a> <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Support Portal </a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Z-Connect blog</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>List of Charges</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Downloads and resources</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Open an account</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>Fund Transfer</a>
          <br />
          <a href="" className="text-muted  mb-3 d-inline-block" style={{textDecoration:"none"}}>60 day challenge</a>
          <br />
        </div>
      </div>
      <div className="mt-5">
        <p className="">Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: NZ200031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100- Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration no.: NZ2000303238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP-related issues ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, Email ID. Ensures speedy redressal of the grievances.</p>

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing. </p>

        <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary, you need not undergo the same process again when you approach another intermediary." Dear investor, if you are subscribing to an IPO, there is no need to issue a cheque or sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment the funds will remain in your bank account. Zerodha does not endorse or authorize anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
