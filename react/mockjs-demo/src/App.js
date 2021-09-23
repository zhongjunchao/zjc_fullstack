import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
// SPA #/ 兼容性  /后端
// src/ 目录 架构意义
// /components /pages /api /store /layout页面版式
import Frame from './layout/Frame'; //
import HookMovie from './pages/HookMovie'
import HookInfos from './pages/HookInfos'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Switch>
          <Route exact path="/" component={HookMovie}/>
          <Route path="/infos" component={HookInfos}/>
        </Switch>
      </Frame>  
    </BrowserRouter>
  );
}

export default App;