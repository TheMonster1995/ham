import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './Landing';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App;

// https://www.canva.com/colors/color-wheel/print/f3deca+fa9483+2d4057+4097aa/
