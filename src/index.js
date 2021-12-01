import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, App, Login } from "./views"
import { createMirageServer } from "./mock/server"
import './styles/index.css';
//import { configureStore } from '../../store/Auth/store';

//const store = configureStore();

createMirageServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />}  />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
      </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);