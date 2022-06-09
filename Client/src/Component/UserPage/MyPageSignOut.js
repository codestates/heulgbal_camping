//회원탈퇴
import React from 'react';
import './MyPageSignOut.css'

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
    <button className='my-side-button my-button'>캠핑장 예약 관리</button>
    <button className='my-side-button my-button'>회원탈퇴</button>
    </p>
    <div className='my-page-input'>
      <div className='my-page-signout'>
        회원탈퇴
        <div/>
      <input className='sign-out-input' type='password' />
        <div />
      <button className='sign-out-button my-button' >회원탈퇴</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Main;