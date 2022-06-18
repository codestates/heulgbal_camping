//qna페이지
import React,{useState} from 'react';
import './QnAPage.css'
import MyModal from '../Model/ProFileModel';
import styled from 'styled-components';
//import { BrowserRouter,Route,Routes } from 'react-router-dom';

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

  const mainClick = (e) => {
    window.location.href = "/"
  }

  const [isOpen, setOpen] = useState(false)
  const handleClick1 = () => {
    setOpen(true)
  }

  const [isOpen1, isClosed1] = useState(false);
  const [isOpen2, isClosed2] = useState(false);
  const [isOpen3, isClosed3] = useState(false);
  const [isOpen4, isClosed4] = useState(false);

  const toggle1 =() => {
    isClosed1(isOpen1 => !isOpen1);
    isClosed2(isOpen2 => false);
    isClosed3(isOpen3 => false);
    isClosed4(isOpen4 => false);
  }

  const toggle2 =() => {
    isClosed1(isOpen1 => false);
    isClosed2(isOpen2 => !isOpen2);
    isClosed3(isOpen3 => false);
    isClosed4(isOpen4 => false);
  }

  const toggle3 =() => {
    isClosed1(isOpen1 => false);
    isClosed2(isOpen2 => false);
    isClosed3(isOpen3 => !isOpen3);
    isClosed4(isOpen4 => false);
  }

  const toggle4 =() => {
    isClosed1(isOpen1 => false);
    isClosed2(isOpen2 => false);
    isClosed3(isOpen3 => false);
    isClosed4(isOpen4 => !isOpen4);
  }
  
  return (
    <First>
    <div>
    <span className='qna-border'>
        <button className='qna-main-button' onClick={mainClick}>Heulgbal Camping</button>
      <img className='my-isIcon' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png' alt=''/>
        {/* <button className='serchb' onClick={serchClick}>검색</button> */}
        <img className='qna-profile-button' onClick={handleClick1} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png' alt='' />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
        </span>
    <div className='qna-area'>
      <div className='qna-text qna-shadow'>자주 묻는 질문</div>
        <div className='qna-question-block1'>
          <button className='qna-input-button' onClick={()=>toggle1()}>예약 취소하고 싶어요</button>
          <button className='qna-input-button' onClick={()=>toggle2()}>홍수같은 사고는 어떻게 예약취소해요?</button>
          <button className='qna-input-button' onClick={()=>toggle3()}>입실날짜 변경하고 싶어요</button>
          <button className='qna-input-button' onClick={()=>toggle4()}>취소 수수료는 어떻게 되요?</button>
        </div>
        <div className='qna-question-block'>
          <div className={isOpen1 ? "block" : "none" }>마이페이지에서 취소하시면 됩니다</div>
          <div className={isOpen2 ? "block" : "none" }>일반적인 호우는 문제 없지만 그런 문제는 직접 연락하셔야합니다</div>
          <div className={isOpen3 ? "block" : "none" }>날짜를 변경하려면 취소한 뒤 변경하셔야합니다</div>
          <div className={isOpen4 ? "block" : "none" }>수수료는 캠핑장에서 정합니다</div>
        </div>
      </div>
    <div className='qna-area'>
      <div className='qna-text qna-shadow'>입점문의 및 고객센터</div>
      <div className='qna-input-text'>
        <p className='qna-text qna-input '>입점문의</p>
          <div className='qna-text'> mokoko@gmail.com</div>
      </div>
      <div className='qna-input-text'>
        <p className='qna-text qna-input'>고객센터</p>
        <div className='qna-input-text-2'>운영시간</div>
        <div className='qna-input-text-3'>평일
          <span> 09:00 ~ 18:00</span>
        </div>
        <div className='qna-input-text-3'>주말, 공휴일
          <span> 휴무</span>
        </div>
        <div className='qna-input-text-3'>점심시간
          <span> 12:00 ~ 13:30</span>
        </div>
        <div className='qna-input-text-3'>고객센터
          <span> 02-000-0000</span>
        </div>
      </div>
    </div>
  </div>
  </First>
  );
};

export default Main;