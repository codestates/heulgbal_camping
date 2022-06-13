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
  /* bottom: 1rem; */
  left: 50%;
  right: 50%;
  width: 26rem;
  height: auto;
  position: absolute;
  /* z-index: 999; */
  background-color: white;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.3rem;
  align-content: space-between;
  transform: translate(-50%);

  > img.title {
    display: block;
    max-width: 50%;
    max-height: 50%;
    margin: 0 auto;
    }

    > div.query1 {
    padding-top: 3rem;
    text-align: center;
  }

  > span.signup-button {
    color: grey;
  }

  > div.email-req {
    padding-top: 2rem;
    font-size: 80%;
    color: rgba(0, 0, 0, 0.5);
  }

  > input {
    padding-top: 0.3rem;
    font-size: 1.2rem;
    width: 99%;
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
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem 1rem;
    background-color: black;
    font-weight: bold;
    color: white;
    border-style: hidden;
    text-align: center;
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
  > div.ttt1 {
    display:none;
    transition: 1s;
  }
  > div.ttt2 {
    display:block;
    transition: 1s;
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
        <img className="title" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWrsX0%2FbtrEzJkKHFe%2Fvwp0KU3Gt1E4QK5quUPne1%2Fimg.png" alt=""/>
          <div className="email-req">아이디</div>
          <input onKeyPress={(e) => {if (e.key === "Enter") {handleLogin()}}} onChange={(e) => handleInputValue(e, "userId")}></input>
          <div className="">아이디는 영문 8~15글자로 작성해야 됩니다.</div>
          <div className="">사용 가능한 아이디 입니다.</div>
          <div className="">존재하는 아이디 입니다.</div>
          <div className="email-req">패스워드</div>
          <input type="password"
          onKeyPress={(e) => {if (e.key === "Enter") {handleLogin()}}}
          onChange={(e) => handleInputValue(e, "password")}>
          </input>
          <div className="email-req">PASSWORD 재확인</div>
          <input></input>
          <div className="">비밀번호가 일치하지 않습니다</div>
          <div className="">비밀번호가 일치합니다.</div>
          <div className="email-req">실명</div>
          <input></input>
          <div className="email-req">email</div>
          <input></input>
          <div className="">유효하지 않은 이메일 입니다.</div>
          {/* <div className="email-req">email 인증번호</div>
          <input></input> */}
          <div className="email-req">연락처</div>
          <input></input>
          <button className="submit" onClick={handleLogin}>가입하기</button>
          <div className="query1">
          <span className="query"><pr>계정이 있으신가요? </pr></span>
          <span>
            <Link to="/login">로그인</Link>
          </span>
          </div>
        </TouchPoint>
      </Wraper>
    </Wallpaper>
    </>
  )
}

export default Login
