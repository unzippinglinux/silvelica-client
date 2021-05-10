import React from "react";
import trendyChairImg from "./../../../Images/furnitureForShow/go-with-the-trend-1.png";

const PurchaseCard = () => {
  return (
    <div
      style={{ border: "0.1rem solid ", height: "30vh", margin: "1rem" }}
      className="col-md-4 col-sm-12  d-flex align-items-center p-1 mx-1"
    >
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            width="80rem"
            src={trendyChairImg}
            alt=""
            className="img-fluid rounded m-auto d-block"
          />
        </div>
        <div className="col-md-6 text-white">
          <h6>Lorem ipsum dolor sit.</h6>
          <small>Lorem ipsum dolor sit amet consectetur.</small>
          <div className="row d-flex  justify-content-center align-items-center">
            <h6>$500</h6>
            <button className="btn btn-success-alt">Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
