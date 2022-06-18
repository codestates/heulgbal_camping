// //마이페이지
// import React from 'react';
// import './SerchMain.css'
// import styled from 'styled-components';

// const First = styled.div`
//   left: 50%;
//   right: 50%;
//   width: 100em;
//   height: auto;
//   position: absolute;
//   /* background-color: white; */
//   border-radius: 0.3rem;
//   align-content: space-between;
//   transform: translate(-50%);
//   border: 2px solid yellowgreen;
//   text-align: center;
//   /* background-color: rgba(0, 0, 0, 0.1); */
// `;


// const Main = () => {

//   const mainClick = (e) => {
//     window.location.href = "/"
//   }

//   return (
//   <First>
//     <div className='serchmain-border'>
//         <button className='serchmain-main-button' onClick={mainClick}>흙발캠핑</button>
//         <button className='serchmain-serch-button' >검색</button>
//         <button className='serchmain-profile-button' >프로필</button>
//       </div>
//       <div className='serchmain-mainbox'>
//     <span className='serchmain-sidebar'>
//     <span className='serchmain-sidebutton'>날짜</span>
//     <input className='setInput'/>
//     <span className='serchmain-sidebutton'>지역</span>
//     <input className='setInput'/>
//     <span className='serchmain-sidebutton'>캠핑장 이름</span>
//     <input className='setInput'/>
//     <span className='serchmain-sidebutton'>인원설정</span>
//     <input className='setInput'/>
//     <span className='serchmain-sidebutton'>숙소 검색</span>
//     <input className='setInput'/>
//     </span>
//     <div className='serchmain-page-input'></div>
//       </div>
//     </First>
//   );
// };

// export default Main;