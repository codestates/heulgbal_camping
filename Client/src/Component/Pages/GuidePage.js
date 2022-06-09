//qna페이지
import React from 'react';
import './GuidePage.css'
//import { BrowserRouter,Route,Routes } from 'react-router-dom';

const Main = () => {
  function handleClick(e) {
    window.location.href = "/login"
  }
  return (
  <div>
    <div className='guide-border'>
      <button className='guide-main-button guide-button guide-text'>흙발캠핑</button>
      <button className='guide-profile-button guide-button guide-text' onClick={handleClick}>프로필</button>
    </div>
    <div className='guide-area'>
      <div className='guide-text guide-shadow'>자주 묻는 질문</div>
    </div>
  </div>
  );
};

export default Main;