//회원탈퇴
import React from 'react';
import './MyPageSigOut.css'

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
    <button className='mysidebutton mybutton'>캠핑장 정보</button>
    <button className='mysidebutton mybutton'>회원탈퇴</button>
    </p>
    <div className='mypageinput'>
      <div className='mypagesignout'>
        회원탈퇴
        <div/>
      <input className='signoutinput' type='password' />
        <div />
      <button className='signooutb' >회원탈퇴</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Main;