//회원가입
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
// import axios from "axios"
// import dummy from "../../DB/User.json"

// 스타일 컴포넌트
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
  > div.isFalse {
    color: red;
  }
  > div.isTrue {
    color: green;
  }
`;

export function Login ({ handleResponseSuccess }) {

  // input 데이터 저장
  const [isUserInfo, setUserInfo] = useState({
    customer_id: "",
    business_number: "",
    password: "",
    email: "",
    name: "",
    business_name: "",
    business_address: "",
    phone: ""
  })

  //안내문구 ON, OFF
  const [isCheckCustomerId, setCheckCustomerId] = useState(false)
  const [isCheckPassword, setCheckPassword] = useState(false)
  const [isCheckPassword2, setCheckPassword2] = useState(false)
  const [isCheckEmail, setCheckEmail] = useState(false)
  // const [isCheckTel, setCheckTel] = useState(false)
  const [inputValue, setInputValue] = useState("")

  //input 값 저장 함수
  const handleInputValue = (e, key) => {
    setUserInfo({...isUserInfo, [key]: e.target.value})
    console.log(isUserInfo.phone)
  }

  //input 데이터 필터링 함수들 
  const isFilterId = (e, key) => {
    let regUserId = /^[a-zA-Z0-9+]{5,}$/
    if ((!e.target.value || (regUserId.test(e.target.value)))) setCheckCustomerId(false)
    else setCheckCustomerId(true)
    handleInputValue(e, key)
  }
  
  const isFilterPw = (e, key) => {
    let regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,14}$/
    if ((!e.target.value || (regPassword.test(e.target.value)))) setCheckPassword(false)
    else setCheckPassword(true)
    handleInputValue(e, key)
  }

  const isFilterPw2 = (e) => {
      if (isUserInfo.password === e.target.value) {
      setCheckPassword2(true)
    }
    else setCheckPassword2(false)
  }

  const isFilterEmail = (e, key) => {
    let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
    if ((!e.target.value || (regEmail.test(e.target.value)))) setCheckEmail(false)
    else setCheckEmail(true)
    handleInputValue(e, key)
  }

  const isFilterTel = (e, key) => {
    const regTel = /^[0-9\b -]{0,13}$/;
    if (regTel.test(e.target.value)) {
      setInputValue(e.target.value);
      handleInputValue(e, key)
    }
  }

  //휴대전화 하이픈 자동완성
  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputValue]);



  return (
    <>
    <Wallpaper>
      <Wraper>
        <TouchPoint>

        <img className="title" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWrsX0%2FbtrEzJkKHFe%2Fvwp0KU3Gt1E4QK5quUPne1%2Fimg.png" alt=""/>

          {/* ID 입력칸 */}
          <div className="email-req">아이디</div>
          <input 
          type="text"
          maxlength='14'
          value={isUserInfo.customer_id}
          onChange={(e) => isFilterId(e, "customer_id")} />
          {isCheckCustomerId ? (<div className="isFalse">아이디는 영문 숫자 조합 5자 이상 작성해야됩니다.</div>) : null}

          {/* 패스워드 입력칸 */}
          <div className="email-req">패스워드</div>
          <input
          type="password"
          maxlength='14'
          onChange={(e) => isFilterPw(e, "password")} />
          {isCheckPassword ? (<div className="isFalse">숫자 영문 특수문자 조합 8자리 이상 작성해야됩니다.</div>) : null}
          
          {/* 패스워드 재확인 입력칸 */}
          <div className="email-req">PASSWORD 재확인</div>
          <input
          type="password"
          onChange={(e) => isFilterPw2(e)}
          />
          {isCheckPassword2 ? (<div className="isTrue">비밀번호가 일치합니다.</div>) : null}

          {/* 실명 입력칸 */}
          <div className="email-req">실명</div>
          <input />

          {/* 이메일 입력칸 */}
          <div className="email-req">email</div>
          <input
          type="email"
          onChange={(e) => isFilterEmail(e, "email")}
          />
          {isCheckEmail ? (<div className="isFalse">올바르지 않은 형식의 이메일입니다.</div>) : null}

          {/* 휴대전화 입력칸 */}
          <div className="email-req">휴대전화</div>
          <input
          type="text"
          value={inputValue}
          onChange={(e) => isFilterTel(e, "phone")}
          />

          {/* 서버와 연결되야 할 가입하기 버튼 */}
          <button className="submit">가입하기</button>

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
