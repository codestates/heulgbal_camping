//마이페이지
import React from 'react';
import './SerchMain.css'

const Main = () => {

  const mainClick = (e) => {
    window.location.href = "/"
  }

  return (
  <div>
    <div className='serchmain-border'>
        <button className='serchmain-main-button serchmain-text serchmain-button' onClick={mainClick}>흙발캠핑</button>
        <button className='serchmain-serch-button serchmain-text serchmain-button' >검색</button>
        <button className='serchmain-profile-button serchmain-text serchmain-button' >프로필</button>
      </div>
      <div className='serchmain-mainbox'>
    <span className='serchmain-sidebar'>
    <button className='serchmain-sidebutton serchmain-button'>날짜</button>
    <button className='serchmain-sidebutton serchmain-button'>지역</button>
    <button className='serchmain-sidebutton serchmain-button'>캠핑장 이름</button>
    <button className='serchmain-sidebutton serchmain-button'>인원설정</button>
    <button className='serchmain-sidebutton serchmain-button'>숙소 검색</button>
    </span>
    <div className='serchmain-page-input'>
      
    </div>
      </div>
    </div>
  );
};

export default Main;