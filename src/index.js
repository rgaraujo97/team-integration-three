import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, App, Login } from "./views"
import { createMirageServer } from "./mock/server"
import './styles/index.css';



createMirageServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Routes>
            <Route path="/Layout" element={<Layout />}>
              <Route  element={<App />}  />
            </Route>
            <Route index path="/" element={<Login />} />
          </Routes>
      </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);