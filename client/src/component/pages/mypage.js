//메인페이지
import React from "react";

const MyPage = () => {
  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
          <div className="tweet__profile">
          </div>
          <div className="tweet__content">
            <div className="tweet__userInfo">
            </div>
          </div>
    </section>
  );
};

export default MyPage;