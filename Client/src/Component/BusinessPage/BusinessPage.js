//마이페이지
import React from 'react';
import './BusinessPage.css'

const Main = () => {
  return (
  <div>
    <div className='business-border'>
        <button className='business-main-button business-text business-button'>흙발캠핑</button>
        <button className='business-profile-button business-text business-button' >프로필</button>
      </div>
      <div className='business-mainbox'>
    <p className='business-sidebar'>
    <button className='business-sidebutton business-button'>회원정보</button>
    <button className='business-sidebutton business-button'>캠핑장 예약관리</button>
    <button className='business-sidebutton business-button'>회원탈퇴</button>
    </p>
    <div className='business-page-input'>
      <div className='business-input-text'>
        이름
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
      연락처
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
        이메일
      </div>
      <input className='business-input-box'/>
      <div />
      <div className='business-input-text business-blanck'>
        사업자 번호
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
      업체이름
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
        사업자 주소
      </div>
      <input className='business-input-box'/>
      <div />
    <button className='business-text business-password-button business-button'>비밀번호 변경</button>
    <button className='business-text business-edit-button business-button'>개인정보 수정</button>
    </div>
      </div>
    </div>
  );
};

export default Main;