import ReactModal from "react-modal"
// import { Link } from "react-router-dom";
import styled from "styled-components";

const modelStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: 10,
  },

  content: {
		display: "flex",
		justifyContent: "center",
		// background: "#ffffe7",
		overflow: "auto",
		top: "32vh",
		left: "43vw",
		right: "43vw",
		bottom: "32vh",
		WebkitOverflowScrolling: "touch",
		borderRadius: "14px",
		outline: "none",
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
  /* margin-top: 1rem; */

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
`;

const MyModal = ({ isOpen, onRequestClose }) => {

  const handleClick1 = () => {
    window.location.href = "/login"
  }

  const handleClick2 = () => {
    window.location.href = "/mypage"
  }

  const handleClick3 = () => {
    window.location.href = "/businesspage"
  }

  const handleClick4 = () => {
    window.location.href = "/qnapage"
  }

  

  return (
    <dev className='model'>
    <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modelStyle}
    >
      <ClickModal>
      <button className="modalA" onClick={handleClick1}>로그인</button>
      <button className="modalB">로그아웃</button>
      <button className="modalB">회원가입</button>
      <button className="modalB" onClick={handleClick2}>마이페이지</button>
      <button className="modalB" onClick={handleClick3}>캠핑장 관리</button>
      <button className="modalB" onClick={handleClick4}>고객센터/Q&A</button>
      </ClickModal>
    </ReactModal>
    </dev>
  )
}

export default MyModal