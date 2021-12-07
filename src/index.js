import React from 'react';
import ReactDOM from 'react-dom';
import { store3,store2,store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, App} from "./views"
import  Login3  from "./views/Login/Login3/Login3"
import  Login2  from "./views/Login/Login2/Login2"
import Login from "./views/Login/Login"
import { createMirageServer } from "./mock/server"
import './styles/index.css';

const init =[
  [<Login3/>,store3],
  [<Login2/>,store2],
  [<Login/>,store]
];

createMirageServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={init[0][1]}>
          <Routes>
            <Route path="/Layout" element={<Layout />}>
              <Route  element={<App />}  />
            </Route>
            <Route index path="/" element={ init[0][0]}/>
          </Routes>
      </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);