import React from 'react'
import Home from './Components/Home'

// App.js --> Components --> Home.js (todos=['item1,'item2'])
//                       --> Todos --> Todo
//Components --> NewTodo(child) --> Home.js(parent)

export default function App() {
  return (
    <div>
      <Home />
    </div>
  )
}
