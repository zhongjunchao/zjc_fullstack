import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Recomment from './pages/Recommend/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Recomment/>
    </Provider>
  )
}

export default App
