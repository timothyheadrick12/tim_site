import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Terminal from './components/Terminal/Terminal'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import External from './components/External/External'
import Memory from './components/Memory/Memory'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//controls the routing to different pages
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Terminal />} />
      <Route exact path="/home/" element={<Home />} />
      <Route exact path="/home/skills/" element={<Skills />} />
      <Route exact path="/home/external-links/" element={<External />} />
      <Route exact path="/home/past/" element={<Memory />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
