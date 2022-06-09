//마이페이지
import React from 'react';
import './SerchMain.css'

const Main = () => {
  return (
  <div>
    <div className='serchmain-border'>
        <button className='serchmain-main-button serchmain-text serchmain-button'>흙발캠핑</button>
        <button className='serchmain-serch-button serchmain-text serchmain-button' >검색</button>
        <button className='serchmain-profile-button serchmain-text serchmain-button' >프로필</button>
      </div>
      <div className='serchmain-mainbox'>
    <p className='serchmain-sidebar'>
    <button className='serchmain-sidebutton serchmain-button'>회원정보</button>
    <button className='serchmain-sidebutton serchmain-button'>캠핑장 예약관리</button>
    <button className='serchmain-sidebutton serchmain-button'>회원탈퇴</button>
    </p>
    <div className='serchmain-page-input'>
      <div className='serchmain-input-text'>
        이름
      </div>
      <input className='input-box'/>
      <div className='serchmain-input-text'>
      연락처
      </div>
      <input className='input-box'/>
      <div className='serchmain-input-text'>
        이메일
      </div>
      <input className='input-box'/>
      <div />
    <button className='serchmain-text password-button serchmain-button'>비밀번호 변경</button>
    <button className='serchmain-text serchmainpage-edit-button serchmain-button'>개인정보 수정</button>
    </div>
      </div>
    </div>
  );
};

export default Main;