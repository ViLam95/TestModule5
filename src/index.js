import React from 'react';
import ReactDOM from 'react-dom/client';
import './component/index.css';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from "./component/Home"
import Update from "./form/Update";
import FormCreate from "./form/FormCreate";
import View from "./component/View";
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>}></Route>
              <Route path={"/create"} element={<FormCreate/>}></Route>
              <Route path={'/update/:id'} element={<Update/>}></Route>
              <Route path={"/view/:id"} element={<View/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

