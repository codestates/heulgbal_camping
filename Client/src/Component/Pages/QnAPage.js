//qna페이지
import React from 'react';
import './QnAPage.css'
//import { BrowserRouter,Route,Routes } from 'react-router-dom';

const Main = () => {
  function handleClick(e) {
    window.location.href = "/login"
  }
  return (
  <div>
    <div className='qna-border'>
      <button className='qna-main-button qna-button qna-text'>흙발캠핑</button>
      <button className='qna-profile-button qna-button qna-text' onClick={handleClick}>프로필</button>
    </div>
    <div className='qna-area'>
      <div className='qna-text qna-shadow'>자주 묻는 질문</div>
      <div className='qna-text qna-input'>들어갈 내용</div>
    </div>
    <div className='qna-area'>
      <div className='qna-text qna-shadow'>입점문의 및 고객센터 연락처</div>
      <div className='qna-text qna-input'>들어갈 내용</div>
    </div>
  </div>
  );
};

export default Main;