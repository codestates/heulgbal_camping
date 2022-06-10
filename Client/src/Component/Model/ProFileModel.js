import ReactModal from "react-modal"
import { Link } from "react-router-dom";

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
    background: "#ffffe7",
    overflow: "auto",
    top: "42vh",
    left: "38vw",
    right: "38vw",
    bottom: "42vh",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
  },
};

const MyModal = ({ isOpen, onRequestClose }) => {

  // const handleClick1 = () => {
  //   window.location.href = "/login"
  // }

  

  return (
    <dev className='model'>
    <ReactModal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modelStyle}
    >
      <Link to= '/login'>로그인</Link>
      
    </ReactModal>
    </dev>
  )
}

export default MyModal