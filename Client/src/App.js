import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Component/Pages/Main';
import Login from './Component/User/Login';
import SignUp from './Component/User/SignUp';
import SerchMain from './Component/SerchPage/SerchMain';
import GuidePage from './Component/Pages/GuidePage';

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
              </Routes>
            </section>
          </main> 
        </div>
        </BrowserRouter>
    </div>
  );
};

export default App;