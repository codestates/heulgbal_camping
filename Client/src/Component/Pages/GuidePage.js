import React from 'react';
import './GuidePage.css'

const Main = () => {
  
  const mainClick = (e) => {
    window.location.href = "/"
  }

  return (
  <div>
    <div className='guide-border'>
      <button className='guide-main-button guide-button guide-text' onClick={mainClick}>흙발캠핑</button>
      <button className='guide-profile-button guide-button guide-text' >프로필</button>
    </div>
    <div className='guide-area'>
      <div className='guide-text guide-shadow'>이용방법 안내</div>
    </div>
  </div>
  );
};

export default Main;