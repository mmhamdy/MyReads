import React from 'react'
import Library from './Library'
import SearchView from './SearchView'
import * as BooksAPI from './BooksAPI'
import {Routes, Route} from "react-router-dom";
import './App.css'


class App extends React.Component {
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
        <Routes>
          <Route exact path="/" element={<Library title="MyReads" books={this.state.books} onChangeShelf={this.reposition} />} />
          <Route path="/search" element={<SearchView books={this.state.books} onChangeShelf={this.reposition} />} />
        </Routes>
      </div>
    )
  }
}

export default App


