//마이페이지
import React from 'react';
import './MyPage.css'

const Main = () => {
  return (
  <div>
    <div className='my-border'>
        <button className='my-main-button my-text my-button'>흙발캠핑</button>
        <button className='my-profile-button my-text my-button' >프로필</button>
      </div>
      <div className='my-mainbox'>
    <p className='my-sidebar'>
    <button className='my-sidebutton my-button'>회원정보</button>
    <button className='my-sidebutton my-button'>캠핑장 예약관리</button>
    <button className='my-sidebutton my-button'>회원탈퇴</button>
    </p>
    <div className='my-page-input'>
      <div className='my-input-text'>
        이름
      </div>
      <input className='input-box'/>
      <div className='my-input-text'>
      연락처
      </div>
      <input className='input-box'/>
      <div className='my-input-text'>
        이메일
      </div>
      <input className='input-box'/>
      <div />
    <button className='my-text password-button my-button'>비밀번호 변경</button>
    <button className='my-text mypage-edit-button my-button'>개인정보 수정</button>
    </div>
      </div>
    </div>
  );
};

export default Main;