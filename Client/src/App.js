import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Component/Pages/Main';
// import MyPage from './Component/BusinessPage';
import Login from './Component/User/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <section className="features">
              <Routes>
                <Route exact path="/" element={<Main />} />
                {/* <Route path="/mypage" element={<MyPage />} /> */}
                <Route path="/login" element={<Login />} />
              </Routes>
            </section>
          </main> 
        </div>
        </BrowserRouter>
    </div>
  );
};

export default App;