import { useState } from 'react';
import React from 'react';
import './MyPage.css'
import styled from 'styled-components';
import MyModal from '../Model/ProFileModel';

const First = styled.div`
  left: 50%;
  right: 50%;
  width: 118em;
  height: auto;
  position: absolute;
  border-radius: 0.3rem;
  align-content: space-between;
  transform: translate(-50%);
`;

const Main = () => {
  const searchLogin1 = JSON.parse(window.localStorage.getItem('usersA'))

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

  // const handleClick5 = () => {
  //   window.location.href = '/mypageout'
  // }

  return (
    <First>
  <div>
    <div className='my-border'>
    <span className='border'>
        <button className='my-main-button' onClick={handleClick2}>Heulgbal Camping</button>
      <img className='my-isIcon' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png' alt=''/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='my-profile-button' onClick={handleClick1} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png' alt='' />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
      </span>
        {/* <button className='my-main-button'>흙발캠핑</button>
        <button className='my-profile-button' >프로필</button> */}
      </div>
      <div className='my-mainbox'>
    <p className='my-sidebar'>
    <button className='my-sidebutton' onClick={handleClick3}>회원정보</button>
    <button className='my-sidebutton' onClick={handleClick4}>캠핑장 예약관리</button>
    {/* <button className='my-sidebutton' onClick={handleClick5}>회원탈퇴</button> */}
    </p>
    <div className='my-page-input'>
      <div className='my-input-text'>
        이름
      </div>
      <div className='input-box'>{searchLogin1.customer_id}</div>
      <div className='my-input-text'>
      연락처
      </div>
      <div className='input-box'>{searchLogin1.phone}</div>
      <div className='my-input-text'>
        이메일
      </div>
      <div className='input-box'>{searchLogin1.email}</div>
      <div />
    <div className='password-button'></div>
    <div className='mypage-edit-button'></div>
    </div>
      </div>
    </div>
    </First>
  );
};

export default Main;