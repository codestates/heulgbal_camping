import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Component/Pages/Main';
import GuidePage from './Component/Pages/GuidePage';
import Login from './Component/User/Login'
import SerchMain from './Component/SerchPage/SerchMain'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <section className="features">
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/introduce" element={<GuidePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/serch" element={<SerchMain />} />
              </Routes>
            </section>
          </main> 
        </div>
        </BrowserRouter>
    </div>
  );
};

export default App;