import {Navigate} from 'react-router'
import {ReactDOM} from 'react'

export function makeRandStr(l) {
  var text = ''
  var char_list =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length))
  }
  return text
}

export function nav() {
  ReactDOM.render(
    <Navigate to="home/skills" />,
    document.getElementById('root')
  )
}
