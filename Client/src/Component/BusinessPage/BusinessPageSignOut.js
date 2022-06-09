//회원탈퇴
import React from 'react';
import './BusinessPageSignOut.css'

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
    <button className='business-side-button business-button'>캠핑장 정보</button>
    <button className='business-side-button business-button'>회원탈퇴</button>
    </p>
    <div className='business-page-input'>
      <div className='business-page-signout'>
        회원탈퇴
        <div/>
      <input className='business-sign-out-input' type='password' />
        <div />
      <button className='business-sign-out-button business-button' >회원탈퇴</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Main;