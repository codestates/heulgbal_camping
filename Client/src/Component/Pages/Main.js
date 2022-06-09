//메인페이지
import React from 'react';
import './Main.css'
//import { BrowserRouter,Route,Routes } from 'react-router-dom';

const Main = () => {
  function handleClick(e) {
    window.location.href = "/login"
  }

  function introduceClick(e) {
    window.location.href = "/introduce"
  }

  function serchClick(e) {
    window.location.href = "/serch"
  }
  return (
  <div className='first'>
    
    <span className='border'>
        <button className='mainb text'>흙발캠핑</button>
        <button className='serchb text'>검색</button>
        <button className='profileb text' onClick={handleClick}>프로필</button>
      </span>
    <div className='benner text'>
      배너 사진
    </div>
    <div className='serchbox'>
    <button className='settingbox text'>체크인</button>
    <button className='settingbox text'>체크아웃</button>
    <button className='settingbox text'>지역선택</button>
    <button className='settingbox2 text' onClick={serchClick}>검색</button>
    </div>
    <button className='text introduce' onClick={introduceClick}>이용안내</button>
    <div className='text benner'>
      <p className='camplist'>
        캠핑장 목록
      </p>
    </div>
    </div>
  );
};

export default Main;