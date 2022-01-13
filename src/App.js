import React from 'react'
import Library from './Library'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class MainView extends React.Component {
  render() {
    return (
      <div className="app">
        <Library />
      </div>
    )
  }
}

export default MainView


