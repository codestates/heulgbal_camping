import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
const isServer = 'http://localhost:4000'

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmYtcW%2FbtrEhpnNT3P%2FmKrwAndM9av5aKOkbTWK2K%2Fimg.jpg'),
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
  right: 4rem;
  width: 26rem;
  height: 32rem;
  position: absolute;
  background-color: white;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.3rem;
  align-content: space-between;

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
  > button.submit2 {
    height: auto;
    width: 100%;
    margin-top: 1rem;
    padding: 0.7rem 1rem;
    background-color: gray;
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
`;

export function Login ({ handleResponseSuccess }) {
  console.log(handleResponseSuccess)
  const [loginInfo, setLoginInfo] = useState({
    customer_id: '',
    password: '',
    type: '1'
  })
  const handleInputValue = (e, key) => {
    setLoginInfo({...loginInfo, [key]: e.target.value})
  }

    useEffect(() => {
      window.localStorage.setItem('users', JSON.stringify(loginInfo))
    }, [loginInfo])

  const handleLogin = () => {
    axios
    .post(`${isServer}/user/login`, loginInfo, {
      'Content-type': 'application/json',
      withCredentials: true
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data.message === 'ok') {
          alert('????????? ??????')
          window.location.replace('/')
        }
        if (res.data.message === 'id or password is not authorized') {
          alert('????????? ???????????? ????????????')
        }
        else if (res.status === 401) {
          alert('????????? ???????????? ????????????')
        }
      }
    })
    .catch((err) => {
      alert('????????? ?????? ??????????????? ???????????? ????????????.')
      console.log(err)
    })
  }

  const handleBLogin = () => {
    window.location.replace('/login')
  }

  return (
    <>
    <Wallpaper>
      <Wraper>
        <TouchPoint>
          <img className='title' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWrsX0%2FbtrEzJkKHFe%2Fvwp0KU3Gt1E4QK5quUPne1%2Fimg.png' alt=''/>
          <div
          className='email-req'>????????? ??????</div>
          <input
          type="text"
          maxlength='10'
          onKeyPress={(e) => {if (e.key === 'Enter') {handleLogin()}}}
          onChange={(e) => handleInputValue(e, 'customer_id')}></input>
          <div className='email-req'>????????????</div>
          <input type='password'
          onKeyPress={(e) => {if (e.key === 'Enter') {handleLogin()}}}
          onChange={(e) => handleInputValue(e, 'password')}>
          </input>
          <button className='submit' onClick={handleLogin}>?????????</button>
          <button className='submit' onClick={handleBLogin}>?????? ?????? ???????????????</button>
          <div className='query1'>
          <span className='query'><pr>????????? ???????????????? </pr></span>
          <span>
            <Link to='/signup'>????????????</Link>
          </span>
          </div>
        </TouchPoint>
      </Wraper>
    </Wallpaper>
    </>
  )
}

export default Login