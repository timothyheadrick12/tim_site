import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Terminal from './components/Terminal/Terminal'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//controls the routing to different pages
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Terminal />} />
      <Route exact path="/home/" element={<div>tree</div>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
