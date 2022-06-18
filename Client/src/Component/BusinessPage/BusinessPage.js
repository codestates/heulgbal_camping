//마이페이지
import React from 'react';
import './BusinessPage.css'
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
    <span className='business-border'>
        <button className='business-main-button' onClick={handleClick2}>Heulgbal Camping</button>
      <img className='my-isIcon' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png' alt=''/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='business-profile-button' onClick={handleClick1} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png' alt='' />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
        </span>
      <div className='business-mainbox'>
    <p className='business-sidebar'>
    <button className='business-sidebutton' onClick={handleClick3}>회원정보</button>
    <button className='business-sidebutton' onClick={handleClick4}>캠핑장 예약관리</button>
    <button className='business-sidebutton' onClick={handleClick5}>회원탈퇴</button>
    </p>
    <div className='business-page-input'>
      <div className='business-input-text'>
        이름
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
      연락처
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
        이메일
      </div>
      <input className='business-input-box'/>
      <div />
      <div className='business-input-text business-blanck'>
        사업자 번호
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
      업체이름
      </div>
      <input className='business-input-box'/>
      <div className='business-input-text'>
        사업자 주소
      </div>
      <input className='business-input-box'/>
      <div />
    <button className='business-password-button'>비밀번호 변경</button>
    <button className='business-edit-button'>개인정보 수정</button>
    </div>
      </div>
    </div>
    </First>
  );
};

export default Main;