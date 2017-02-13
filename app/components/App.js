import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

// import axios from 'axios'
// let ping = function (url) {
//   let start = Date.now()
//   let end
//
//   axios.get(url)
//   .then(function () {
//     end = Date.now()
//     console.log(end - start)// the time needed to do the request
//   })
//   .catch((err) => console.log(err))
// }

import $ from 'jquery'
let ping = function (url) {
  let start = Date.now()
  let end
  $.ajax({
    url: 'page',
    success: function () {
      end = Date.now()
      console.log(end - start)// the time needed to do the request
    }
  })
}

ping('8.8.8.8')
ping('8.8.8.8')
ping('8.8.8.8')
ping('8.8.8.8')
ping('8.8.8.8')

/*
var t = Date.now()
var t2
$.ajax({
  url: 'page',
  success: function () {
    t2 = Date.now()
    console.log(t2 - t)// the time needed to do the request
  }
})
*/

const App = () =>
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>

export default App
