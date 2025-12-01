import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./scss/Community1.scss";

const Community = () => {
  const navigate = useNavigate();
  const handleGoMap = () => {
    navigate("/community/store");
    window.scrollTo(0, 0);
  };
  return (
    <section className="community-wrap">
      <div className="inner">
        <div className="com-grid">
          <div className="com-card com-customer">
            <Link to="/community/customer">
              <div className="com-text">Customer Service</div>
              <img
                src="./images/cs_bg.png"
                alt="Customer Service"
                className="community"
              />
            </Link>
          </div>

          <div className="com-card com-notice">
            <Link to="/community/notice">
              <div className="com-text">Notice</div>
              <img
                src="./images/notice_bg.png"
                alt="Notice"
                className="community"
              />
            </Link>
          </div>

          <div className="com-card com-jackson">
            <img src="./images/logo2.png" alt="Jackson chameleon" />
          </div>

          <div onClick={handleGoMap} className="com-card com-store">
            <div className="com-text">Store</div>
            <img
              src="./images/store_bg.png"
              alt="Store"
              className="community"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
