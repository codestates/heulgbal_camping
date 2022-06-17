//회원탈퇴
import { useState } from 'react';
import React from 'react';
import './MyPageSignOut.css'
import styled from 'styled-components';
import MyModal from '../Model/ProFileModel';

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
    window.location.href = '/mypage'
  }

  const handleClick4 = () => {
    window.location.href = '/mypagecamp'
  }

  const handleClick5 = () => {
    window.location.href = '/mypageout'
  }

  return (
    <First>
      <div>
    <span className='c-my-border'>
        <button className='c-my-main-button' onClick={handleClick2}>Heulgbal Camping</button>
      <img className='my-isIcon' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png' alt=''/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='c-my-profile-button' onClick={handleClick1} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png' alt='' />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
      </span>
      <div className='c-my-main-box'>
    <p className='c-my-sidebar'>
    <button className='c-my-side-button' onClick={handleClick3}>회원정보</button>
    <button className='c-my-side-button' onClick={handleClick4}>캠핑장 예약 관리</button>
    <button className='c-my-side-button' onClick={handleClick5}>회원탈퇴</button>
    </p>
    <div className='c-my-page-input'>
      <div className='c-my-page-signout'>
        Password를 입력해주세요
        <div/>
      <input className='c-sign-out-input' type='password' />
        <div />
      <button className='c-sign-out-button' >회원탈퇴</button>
      </div>
    </div>
      </div>
    </div>
    </First>
  );
};

export default Main;