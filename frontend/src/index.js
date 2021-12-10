import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Terminal from './components/Terminal/Terminal'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//controls the routing to different pages
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Terminal />} />
      <Route exact path="/home/" element={<App />} />
      <Route
        exact
        path="/home/skills/"
        element={<div style={{color: 'white'}}>Welcome to skills!</div>}
      />
      <Route
        exact
        path="/home/external-links/"
        element={<div style={{color: 'white'}}>Welcome to external links!</div>}
      />
      <Route
        exact
        path="/home/past/"
        element={<div style={{color: 'white'}}>Welcome to past projects!</div>}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
