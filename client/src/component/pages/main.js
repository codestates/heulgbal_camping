//메인페이지
import React from 'react';
import './main.css'

const Main = () => {
  return (
  <div className='first'>
    <span className='border'>
        <button className='mainb text'>흙발캠핑</button>
        <button className='serchb text'>검색</button>
        <button className='profileb text'>프로필</button>
      </span>
    <div className='benner text'>
      배너 사진
    </div>
    <div className='serchbox'>
    <button className='settingbox text'>체크인</button>
    <button className='settingbox text'>체크아웃</button>
    <button className='settingbox text'>지역선택</button>
    <button className='settingbox2 text'>검색</button>
    </div>
    <button className='text introduce'>이용안내</button>
    <div className='text benner'>
      <p className='camplist'>
        캠핑장 목록
      </p>
    </div>
    </div>
  );
};

export default Main;