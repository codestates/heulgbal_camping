import ReactModal from 'react-modal'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
// const isServer = 'http://localhost:4000'

const modelStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: 10,
  },

  content: {
		display: 'flex',
		justifyContent: 'center',
		overflow: 'auto',
		top: '36vh',
		left: '43vw',
		right: '43vw',
		bottom: '40vh',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '14px',
		outline: 'none',
		zIndex: 10,
  },
};

const ClickModal = styled.div`
  display: flex;
  text-align: center;
	flex-direction: column;
  border-color: none;
  background-color: none;
  color: none;

  > button.modalA {
    font-size: 20px;
    color: none;
    background-color: transparent;
    border-color: transparent;
  }

  > button.modalB {
  margin-top: 1rem;
  font-size: 20px;
  background-color: transparent;
  border-color: transparent;
  }

  > button.burrow {
  display: none;
  }
`;

const MyModal = ({ isOpen, onRequestClose}) => {
  const [isUserLogin, setUserLogin] = useState(false)
  const [isUserSignUp, setUserSignup] = useState(false)
  const [isMyPage, setMyPage] = useState(false)
  const [isBusinessMyPage, setBusinessMyPage] = useState(false)
  const [isLogOut, setLogOut] = useState(false)
  const searchLogin = JSON.parse(window.localStorage.getItem('users'))
  
  const handleClickLogin = () => {
    if (searchLogin === null) {
      setUserLogin(true)
      window.location.href = '/login'
    }
    else {
      setUserLogin(false)
    }
  }

  const handleClickSignup = () => {
      window.location.href = '/signup'
      }

  const handleClick2 = () => {
      window.location.href = '/mypage'
    }

  const handleClick3 = () => {
      window.location.href = '/businesspage'
    }

  const handleClick4 = () => {
      window.location.href = '/qnapage'
    }
  const handleClick5 = () => {
    alert('로그아웃 완료')
    window.localStorage.clear()
    window.location.replace('/')
  }

  const searchBurrow1 = (searchLogin) => {
    if (searchLogin === null) {
      setUserLogin(true)
      setUserSignup(true)
      setMyPage(false)
      setBusinessMyPage(false)
      setLogOut(false)
      setBusinessMyPage(false)
    }
    else if (searchLogin.type === '0') {
      setLogOut(true)
      setMyPage(true)
      setUserSignup(false)
      setUserLogin(false)
      setLogOut(true)
      setBusinessMyPage(false)
    }
    else if (searchLogin.type === '1') {
      setLogOut(true)
      setMyPage(false)
      setUserSignup(false)
      setUserLogin(false)
      setLogOut(true)
      setBusinessMyPage(true)
    }
    else {
      setUserLogin(false)
      setUserSignup(false)
    }
  }

  useEffect(() => {
    searchBurrow1(searchLogin)
  })
  // {isOpen1 ? 'block' : 'none' }

  return (
    <dev className='model'>
    <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modelStyle}
    >
      <ClickModal>
      <button className={isUserLogin ? 'modalB' : 'burrow'} onClick={handleClickLogin}>로그인</button>
      <button className={isLogOut ? 'modalB' : 'burrow'} onClick={handleClick5}>로그아웃</button>
      <button className={isUserSignUp ? 'modalB' : 'burrow'} onClick={handleClickSignup}>회원가입</button>
      <button className={isMyPage ? 'modalB' : 'burrow'} onClick={handleClick2}>마이페이지</button>
      <button className={isBusinessMyPage ? 'modalB' : 'burrow'} onClick={handleClick3}>캠핑장 관리</button>
      <button className='modalB' onClick={handleClick4}>고객센터/Q&A</button>
      </ClickModal>
    </ReactModal>
    </dev>
  )
}

export default MyModal