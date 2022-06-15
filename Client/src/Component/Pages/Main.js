import { useState } from 'react';
import React from 'react';
import './Main.css'
import MyModal from '../Model/ProFileModel';

const Main = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClick1 = () => {
    setOpen(true)
  }
<<<<<<< HEAD
  // const handleModalSubmit = () => setOpen(false)
  
  // const handleModalCancle = () => setOpen(false)

=======

  function introduceClick(e) {
    window.location.href = "/introduce"
  }

  function serchClick(e) {
    window.location.href = "/serch"
  }
>>>>>>> a781c7b78944132e931bd8fbdff67325398c384b
  return (
  <div className='first'>
    
    <span className='border'>
        <button className='mainb text'>흙발캠핑</button>
        <button className='serchb text'>검색</button>
        <button className='profileb text' onClick={handleClick1}>프로필</button>
        <MyModal 
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
      </span>
    <div className='benner text'>
      배너 사진
    </div>
    <div className='serchbox'>
    <button className='settingbox text'>체크인</button>
    <button className='settingbox text'>체크아웃</button>
    <button className='settingbox text'>지역선택</button>
<<<<<<< HEAD
    <button className='settingbox2 text'>검색</button>
    </div>
    <button className='text introduce'>이용안내</button>
=======
    <button className='settingbox2 text' onClick={serchClick}>검색</button>
    </div>
    <button className='text introduce' onClick={introduceClick}>이용안내</button>
>>>>>>> a781c7b78944132e931bd8fbdff67325398c384b
    <div className='text benner'>
      <p className='camplist'>
        캠핑장 목록
      </p>
    </div>
    </div>
  );
};

export default Main;