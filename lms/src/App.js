import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';





function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}


export default App;
