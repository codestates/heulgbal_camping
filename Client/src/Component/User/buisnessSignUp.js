import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
const isServer = 'http://localhost:4000'

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 115%;
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
  left: 50%;
  right: 50%;
  width: 26rem;
  height: auto;
  position: absolute;
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
  const [isBusinessInfo, setBusinessInfo] = useState({
    business_number: '',
    password: '',
    email: '',
    name: '',
    business_name: '',
    business_address: '',
    phone: ''
  })

  // useEffect(() => {
  //   window.localStorage.setItem('usersB', JSON.stringify(isBusinessInfo))
  // }, [isBusinessInfo])

  console.log(isBusinessInfo)
  const [isCheckCustomerId, setCheckCustomerId] = useState(false)
  const [isCheckPassword, setCheckPassword] = useState(false)
  const [isCheckPassword2, setCheckPassword2] = useState(false)
  const [isCheckEmail, setCheckEmail] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleInputValue = (e, key) => {
    setBusinessInfo({...isBusinessInfo, [key]: e.target.value})
  }
  const isFilterId = (e, key) => {
    let regUserId = /^[0-9]{0,10}$/
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
      if (isBusinessInfo.password === e.target.value) {
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
  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputValue]);

  const handleSignUp = () => {
  if (!(isBusinessInfo.business_number && isBusinessInfo.password && isBusinessInfo.email && isBusinessInfo.name && isBusinessInfo.phone && isBusinessInfo.business_name && isBusinessInfo.business_address)) {
    alert ("?????? ????????? ???????????? ?????????.")
  }
  else {
    
    axios.post(`${isServer}/business/signup`, isBusinessInfo
    )
    .then(() => alert("???????????? ??????"))
    window.location.replace('/login')
    .catch(err => console.log(err))
  }
}

  const isUserGo = () => {
    window.location.replace('/signup')
  }

  return (
    <>
    <Wallpaper>
      <Wraper>
        <TouchPoint>

        <img className='title' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWrsX0%2FbtrEzJkKHFe%2Fvwp0KU3Gt1E4QK5quUPne1%2Fimg.png' alt=''/>
          <div className='email-req'>???????????????</div>
          <input 
          type='text'
          maxlength='10'
          value={isBusinessInfo.business_number}
          onChange={(e) => isFilterId(e, 'business_number')} />
          {isCheckCustomerId ? (<div className='isFalse'>????????? ????????? ?????????(-)??? ???????????? ??????????????????</div>) : null}
          <div className='email-req'>????????????</div>
          <input
          type='password'
          maxlength='14'
          onChange={(e) => isFilterPw(e, 'password')} />
          {isCheckPassword ? (<div className='isFalse'>?????? ?????? ???????????? ?????? 8?????? ?????? ?????????????????????.</div>) : null}
          <div className='email-req'>PASSWORD ?????????</div>
          <input
          type='password'
          onChange={(e) => isFilterPw2(e)}
          />
          {isCheckPassword2 ? (<div className='isTrue'>??????????????? ???????????????.</div>) : null}
          <div className='email-req'>??????</div>
          <input onChange={(e) => handleInputValue(e, 'name')}/>
          <div className='email-req'>email</div>
          <input
          type='email'
          onChange={(e) => isFilterEmail(e, 'email')}
          />
          {isCheckEmail ? (<div className='isFalse'>???????????? ?????? ????????? ??????????????????.</div>) : null}
          <div className='email-req'>????????????</div>
          <input
          type='text'
          value={inputValue}
          onChange={(e) => isFilterTel(e, 'phone')}
          />
          <div className='email-req'>????????? ??????</div>
          <input onChange={(e) => handleInputValue(e, 'business_name')}/>
          <div className='email-req'>????????? ??????</div>
          <input onChange={(e) => handleInputValue(e, 'business_address')}/>
          <button className='submit' onClick={handleSignUp}>??????</button>
          <button className='submit' onClick={isUserGo}>??????????????????</button>
          <div className='query1'>
          <span className='query'><pr>????????? ???????????????? </pr></span>
          <span>
            <Link to='/login'>?????????</Link>
          </span>
          </div>

        </TouchPoint>
      </Wraper>
    </Wallpaper>
    </>
  )
}

export default Login
