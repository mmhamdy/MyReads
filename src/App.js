import React from 'react'
import Shelf from './Shelf'
import AddBooks from './AddBooks'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class Library extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf  shelfTitle="Currently Reading" shelfKey="currentlyReading"/>
          <Shelf  shelfTitle="Want to Read" shelfKey="wantToRead"/>
          <Shelf  shelfTitle="Read" shelfKey="read"/>
          <AddBooks />
        </div>
      </div>
    )
  }
}

export default Library


