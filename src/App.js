import React from 'react'
import Shelf from './Shelf'
import AddBooks from './AddBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Library extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
      this.populate();
  }

  populate = () => {
      BooksAPI.getAll().then(books => this.setState({books}))
  }

  reposition = (book, shelf) => {
      BooksAPI.update(book, shelf).then(result => this.populate())
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf  shelfTitle="Currently Reading" shelfKey="currentlyReading" books={this.state.books} onChangeShelf={this.reposition}/>
          <Shelf  shelfTitle="Want to Read" shelfKey="wantToRead" books={this.state.books} onChangeShelf={this.reposition}/>
          <Shelf  shelfTitle="Read" shelfKey="read" books={this.state.books} onChangeShelf={this.reposition}/>
          <AddBooks />
        </div>
      </div>
    )
  }
}

export default Library


