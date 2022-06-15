//캠핑장 정보
import React from 'react';
import './BusinessPageCampSite.css'

const Main = () => {
  return (
  <div>
    <div className='business-border'>
        <button className='business-main-button business-text business-button'>흙발캠핑</button>
        <button className='business-profile-button business-text business-button' >프로필</button>
      </div>
      <div className='business-main-box'>
    <p className='business-sidebar'>
    <button className='business-side-button business-button'>회원정보</button>
    <button className='business-side-button business-button'>캠핑장 예약관리</button>
    <button className='business-side-button business-button'>회원탈퇴</button>
    </p>
    <div className='business-page-input'>
      <div className='business-camp-input-text'>
        캠핑장 예약관리
      </div>
      
    <button className='business-text business-password-button business-button'>예약 내역 확인</button>
    <button className='business-text business-page-edit-button business-button'>예약 취소</button>
    </div>
      </div>
    </div>
  );
};

export default Main;