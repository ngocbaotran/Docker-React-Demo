import React from 'react'

import ProductList from './components/ProductList'
import './App.css'
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  
  render () {
    return (
      <>
        <div className="container-fluid">
            {/*<h1>Hỏng pít @@</h1>*/}
            {/*<ProductList/>*/}
            <LoginForm />
        </div>
      </>
    )
  }
}

export default App
