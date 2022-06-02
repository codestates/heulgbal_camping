import React from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Main from './component/pages/main';
import MyPage from './component/pages/mypage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <section className="features">
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/mypage" element={<MyPage />} />
              </Routes>
            </section>
          </main> 
        </div>
        </BrowserRouter>
    </div>
  );
};

export default App;