import React from 'react';
import './Main.css'
import { useState } from 'react';
import MyModal from '../Model/ProFileModel';
import styled from 'styled-components';

const First = styled.div`
  left: 50%;
  right: 50%;
  width: 80em;
  height: auto;
  position: absolute;
  /* background-color: white; */
  border-radius: 0.3rem;
  align-content: space-between;
  transform: translate(-50%);
  border: 2px solid yellowgreen;
  text-align: center;
`;

const Main = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick1 = () => {
    setOpen(true)
  }
  const handleClick2 = () => {
    window.location.href = "/"
  }

  // const introduceClick = () => {
  //   window.location.href = "/introduce"
  // }

  // const serchClick = () => {
  //   window.location.href = "/serch"
  // }

  return (
    <First>
    <span className='border'>
        <button className='mainb' onClick={handleClick2}>Heulgbal Camping</button>
      <img className="isIcon" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png" alt=""/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='profileb' onClick={handleClick1} src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png" alt="" />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
      </span>
      <img className="benner" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNnGIv%2FbtrEXGvD6T9%2FBdaR4NJ44SMnaKxcFyk5FK%2Fimg.png" alt=""/>
    {/* <div className='serchbox'>
    <button className='settingbox text'>체크인</button>
    <button className='settingbox text'>체크아웃</button>
    <button className='settingbox text'>지역선택</button>
    <button className='settingbox2 text' onClick={serchClick}>검색</button>
    </div> */}
    {/* <button className='text introduce' onClick={introduceClick}>이용안내</button> */}
    <div className='isHide'>
    <div className='iscamp0'>
    <span className=''>
      <span className='iscamp1'>경기도 가평군</span>
      <span className='iscamp2'>발탄 펫밀리 파크타운</span>
      </span>
      <button className='iscamp3'>예약</button>
      </div>
      
      <div className='iscamp0'>
      <span className=''>
      <span className='iscamp1'>경기도 포천시</span>
      <span className='iscamp2'>아르고스 달빛 글램핑</span>
      </span>
      <button className='iscamp3'>예약</button>
      </div>

      <div className='iscamp0'>
      <span className=''>
      <span className='iscamp1'>경기도 여주시</span>
      <span className='iscamp2'>모코코 애견파크 캠핑</span>
      </span>
      <button className='iscamp3'>예약</button>
      </div>
      </div>
    </First>
  );
};

export default Main;