import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container  mb-5 border-top ">
        <div className="row mt-5">
          <div className="col">
            <img src={imageUrl} style={{width:"75%"}} alt="" />
          </div>
          <div className="col p-5">
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <div className="mt-3">
              <a href="" style={{ textDecoration: "none" }}>
                {tryDemo}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                {learnMore}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="mt-3">
              <a href="">
                <img src={googlePlay} alt="" />
              </a>
              <a href="" className="mx-5">
                <img src={appStore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
