import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container border-top mb-5 ">
        <div className="row  ">
          <div className="col mt-5 p-5">
            <h2 className=" ">{productName}</h2>
            <p>{productDescription}</p>
            <div className="">
              <a href=""  style={{ textDecoration: "none" }}>
                {learnMore}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>  </div>
            <div className="col">
             
              <img src={imageUrl} style={{ width: "75%" }} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
