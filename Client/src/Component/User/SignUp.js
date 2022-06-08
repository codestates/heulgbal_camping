//회원가입
import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
// import axios from "axios"
import dummy from "../../DB/User.json"

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmYtcW%2FbtrEhpnNT3P%2FmKrwAndM9av5aKOkbTWK2K%2Fimg.jpg"),
    linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  background-size: cover;
  background-repeat: no-repeat;
`;

const Wraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  background-size: cover;
  background-repeat: no-repeat;
`;

const TouchPoint = styled.div`
  bottom: 3rem;
  right: 12rem;
  width: 26rem;
  height: 25rem;
  position: absolute;
  z-index: 999;
  background-color: white;
  padding: 6rem 6rem 4rem 6rem;
  border-radius: 0.3rem;
  align-content: space-between;

  > div.title {
    font-weight: bold;
    font-size: 200%;
    padding-bottom: 0.7em;
  }

  > span.query {
    padding-right: 0.5em;
  }

  > span.signup-button {
    color: grey;
  }

  > div.email-req {
    padding-top: 3rem;
    font-size: 80%;
    color: rgba(0, 0, 0, 0.5);
  }

  > input {
    padding-top: 0.3rem;
    font-size: 1.2rem;
    width: 25rem;
    outline: none;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0.5px;
    border-color: rgba(0, 0, 0, 0.1);
  }

  > input:focus {
    border-bottom-width: 2.5px;
    border-color: rgba(0, 0, 0, 0.5);
  }

  > div.error {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
  }

  > button.submit {
    height: auto;
    margin-top: 1rem;
    padding: 0.7rem 1rem;
    background-color: lightgrey;
    font-weight: bold;
    border-style: hidden;
    border-radius: 2rem;
    cursor: pointer;
  }

  > button.oauth {
    width: 10rem;
    height: auto;
    margin-top: 3rem;
    margin-left: 1rem;
    padding: 0.7rem 1rem;
    background-color: gold;
    color: black;
    font-weight: bold;
    border-style: hidden;
    border-radius: 2rem;
    cursor: pointer;
  }
`;

export function Login ({ handleResponseSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  })

  const handleInputValue = (e, key) => {
    setLoginInfo({...loginInfo, [key]: e.target.value})
  }

  const handleLogin = () => {
    const userInfo = dummy.user.find(el => el.userId === loginInfo.userId)
    if (userInfo.password === loginInfo.password) {
      window.location.replace("/")
      console.log('넬라굿')
    }

    else {
      console.log("노굿")
      // console.log(userInfo)
    }
    
  }

  return (
    <>
    <Wallpaper>
      <Wraper>
        <TouchPoint>
          <div className="title">회원가입</div>
          <span className="query">이미 계정이 있으신가요?</span>
          <span className="signup-button">
            <Link to="/login">로그인</Link>
          </span>
          <div className="email-req">아이디</div>
          <button>중복검사</button>
          <input onKeyPress={(e) => {if (e.key === "Enter") {handleLogin()}}} onChange={(e) => handleInputValue(e, "userId")}></input>
          <div className="email-req">패스워드</div>
          <input type="password"
          onKeyPress={(e) => {if (e.key === "Enter") {handleLogin()}}}
          onChange={(e) => handleInputValue(e, "password")}>
          </input>
          <button className="submit" onClick={handleLogin}>로그인</button>
        </TouchPoint>
      </Wraper>
    </Wallpaper>
    </>
  )
}

export default Login