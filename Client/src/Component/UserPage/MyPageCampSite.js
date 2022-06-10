//캠핑장 정보
import React from 'react';
import './MyPageCampSite.css'

const Main = () => {
  return (
  <div className='myfirst'>
    <div className='myborder'>
        <button className='mymainb mytext mybutton'>흙발캠핑</button>
        <button className='myprofileb mytext mybutton' >프로필</button>
      </div>
      <div className='mymainbox'>
    <p className='mysidebar'>
    <button className='mysidebutton mybutton'>회원정보</button>
    <button className='mysidebutton mybutton'>캠핑장 예약관리</button>
    <button className='mysidebutton mybutton'>회원탈퇴</button>
    </p>
    <div className='mypageinput'>
      <div className='mycampinputtext'>
        캠핑장 예약관리
      </div>
      
    <button className='mytext passwordb'>예약 내역 확인</button>
    <button className='mytext pageeditb'>예약 취소</button>
    </div>
      </div>
    </div>
  );
};

export default Main;