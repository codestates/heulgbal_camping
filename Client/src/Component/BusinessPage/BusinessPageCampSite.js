//캠핑장 정보
import React from 'react';
import './BusinessPageCampSite.css'
import { useState } from 'react';
import MyModal from '../Model/ProFileModel';
import styled from 'styled-components';

const First = styled.div`
left: 50%;
right: 50%;
width: 118em;
height: auto;
position: absolute;
/* background-color: white; */
border-radius: 0.3rem;
align-content: space-between;
transform: translate(-50%);
/* border: 2px solid yellowgreen; */
`;

const Main = () => {

  const [isOpen, setOpen] = useState(false)
  const handleClick1 = () => {
    setOpen(true)
  }

  const handleClick2 = () => {
    window.location.href = '/'
  }

  const handleClick3 = () => {
    window.location.href = '/businesspage'
  }

  const handleClick4 = () => {
    window.location.href = '/businesscamp'
  }

  const handleClick5 = () => {
    window.location.href = '/businessout'
  }

  return (
    <First>
      <div>
    <span className='b-business-border'>
        <button className='b-business-main-button' onClick={handleClick2}>Heulgbal Camping</button>
      <img className='my-isIcon' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png' alt=''/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='b-business-profile-button' onClick={handleClick1} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png' alt='' />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
        </span>
      <div className='b-business-main-box'>
    <p className='b-business-sidebar'>
    <button className='b-business-side-button' onClick={handleClick3}>회원정보</button>
    <button className='b-business-side-button' onClick={handleClick4}>캠핑장 예약관리</button>
    <button className='b-business-side-button' onClick={handleClick5}>회원탈퇴</button>
    </p>
    <div className='b-business-page-input'>
      <div className='b-business-camp-input-text'>
        캠핑장 예약관리
      </div>
      
    <button className='b-business-password-button'>예약 내역 확인</button>
    <button className='b-business-page-edit-button'>예약 취소</button>
    </div>
      </div>
    </div>
    </First>
  );
};

export default Main;