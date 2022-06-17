//회원탈퇴
import React from 'react';
import './BusinessPageSignOut.css'
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
    <span className='c-business-border'>
        <button className='c-business-main-button' onClick={handleClick2}>Heulgbal Camping</button>
      <img className='my-isIcon' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png' alt=''/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='c-business-profile-button' onClick={handleClick1} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png' alt='' />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
        </span>
      <div className='c-business-main-box'>
    <p className='c-business-sidebar'>
    <button className='c-business-side-button' onClick={handleClick3}>회원정보</button>
    <button className='c-business-side-button' onClick={handleClick4}>캠핑장 정보</button>
    <button className='c-business-side-button' onClick={handleClick5}>회원탈퇴</button>
    </p>
    <div className='c-business-page-input'>
      <div className='c-business-page-signout'>
        회원탈퇴
        <div/>
      <input className='c-business-sign-out-input' type='password' />
        <div />
      <button className='c-business-sign-out-button' >회원탈퇴</button>
      </div>
    </div>
      </div>
    </div>
    </First>
  );
};

export default Main;