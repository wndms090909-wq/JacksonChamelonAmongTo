import React from "react";
import "./scss/DetailCartPopup.scss";
import { Link } from "react-router-dom";

const DetailCartPopup = () => {
  return (
    <div className="cart-popup-wrap fade-in">
      <div className="cart-popup">
        <p>
          <img src="/images/detail-cart-icon.png" alt="" />
        </p>
        <p className="text">장바구니에 상품을 담았습니다</p>
        <p className="text2">
          <Link to="/shoppingcart">바로가기</Link>
        </p>
      </div>
    </div>
  );
};

export default DetailCartPopup;
