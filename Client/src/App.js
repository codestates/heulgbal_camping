import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Component/Pages/Main';
import Login from './Component/User/Login';
import SignUp from './Component/User/SignUp';
import SerchMain from './Component/SerchPage/SerchMain';
import GuidePage from './Component/Pages/GuidePage';
import MyPage from './Component/UserPage/MyPage'
import MyPageCampSite from './Component/UserPage/MyPageCampSite'
import MyPageSignOut from './Component/UserPage/MyPageSignOut'
import BusinessPage from './Component/BusinessPage/BusinessPage'
import BusinessCampSite from './Component/BusinessPage/BusinessPageCampSite'
import BusinessPageSignOut from './Component/BusinessPage/BusinessPageSignOut'
import QnApage from './Component/Pages/QnAPage'
// import button from './Component/User/button'
// import SignIn from './Component/User/SignIn';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <section className="features">
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/serch" element={<SerchMain />} />
                <Route path="/introduce" element={<GuidePage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypagecamp" element={<MyPageCampSite />} />
                <Route path="/mypageout" element={<MyPageSignOut />} />
                <Route path="/businesspage" element={<BusinessPage />} />
                <Route path="/businesscamp" element={<BusinessCampSite />} />
                <Route path="/businessout" element={<BusinessPageSignOut />} />
                <Route path="/businessout" element={<BusinessPageSignOut />} />
                <Route path="/qnapage" element={<QnApage />} />

              </Routes>
            </section>
          </main> 
        </div>
        </BrowserRouter>
    </div>
  );
};

export default App;