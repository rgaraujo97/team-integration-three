import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, App, Login } from "./views"
import { createMirageServer } from "./mock/server"
import './styles/index.css';
import { PureProvider } from "./store"

createMirageServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PureProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />}  />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
      </PureProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);