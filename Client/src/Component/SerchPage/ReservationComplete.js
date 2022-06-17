//마이페이지
import React from 'react';
import './ReservationComplete.css'

const Main = () => {

  const mainClick = (e) => {
    window.location.href = "/"
  }

  return (
  <div>
    <div className='reservation-border'>
        <button className='reservation-main-button' onClick={mainClick}>흙발캠핑</button>
        <button className='reservation-serch-button' >검색</button>
        <button className='reservation-profile-button' >프로필</button>
      </div>
      <div className='reservation-mainbox'>
    <div className='reservation-page-input'>
      <div className='reservation-input-text'>
      예약 신청 완료
      </div>
      <div className='reservation-input-text'>
      승인 완료 여부는 마이페이지 - 예약 현황에서 보실 수 있습니다.
      </div>
      <div className='reservation-input-text'>
      금액은 현장결제 입니다.
      </div>
      <button className='reservation-main-return' onClick={mainClick}>메인페이지 이동</button>
      <div />  
    </div>
      </div>
    </div>
  );
};

export default Main;