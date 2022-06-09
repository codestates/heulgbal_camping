//캠핑장 정보
import React from 'react';
import './MyPageCampSite.css'

const Main = () => {
  return (
  <div>
    <div className='my-border'>
        <button className='my-main-button my-text my-button'>흙발캠핑</button>
        <button className='my-profile-button my-text my-button' >프로필</button>
      </div>
      <div className='my-main-box'>
    <p className='my-sidebar'>
    <button className='my-side-button my-button'>회원정보</button>
    <button className='my-side-button my-button'>캠핑장 예약관리</button>
    <button className='my-side-button my-button'>회원탈퇴</button>
    </p>
    <div className='my-page-input'>
      <div className='my-camp-input-text'>
        캠핑장 예약관리
      </div>
      
    <button className='my-text password-button my-button'>예약 내역 확인</button>
    <button className='my-text page-edit-button my-button'>예약 취소</button>
    </div>
      </div>
    </div>
  );
};

export default Main;