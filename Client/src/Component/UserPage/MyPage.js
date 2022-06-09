//마이페이지
import React from 'react';
import './MyPage.css'

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
      <div className='myinputtext'>
        이름
      </div>
      <input className='inputbox'/>
      <div className='myinputtext'>
      연락처
      </div>
      <input className='inputbox'/>
      <div className='myinputtext'>
        이메일
      </div>
      <input className='inputbox'/>
      <div />
    <button className='mytext passwordb'>비밀번호 변경</button>
    <button className='mytext pageeditb'>개인정보 수정</button>
    </div>
      </div>
    </div>
  );
};

export default Main;