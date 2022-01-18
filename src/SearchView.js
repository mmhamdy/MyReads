import React from 'react'
import {Link} from 'react-router-dom'
import debounce from 'lodash.debounce'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchView extends React.Component {
    state = {
        searchBooks: [],
        input: "",
    }

    books = this.props.books
    onChangeShelf = this.props.onChangeShelf

    manageShelf = (searchBooks) => {
      const books = this.props.books;
      const searchedBooks = searchBooks;

      searchedBooks.map(searchedBook => {
        books.map(book => {
          if (book.id === searchedBook.id) {
            searchedBook.shelf = book.shelf
          } else if (searchedBook.shelf === undefined){
            searchedBook.shelf = 'none'
          }
          return book
        })
        return searchedBook
      })
      return searchedBooks
    }

    onSearch = (e) => {
      const query = e.target.value;
      this.setState({input: query});

      try {
        if(query.length > 0) {
          debounce(
            BooksAPI.search(query).then(searchBooks => {
              if(searchBooks.error){
                this.setState({searchBooks: []})
              } else {
                const managedSearch = this.manageShelf(searchBooks)
                this.setState({searchBooks: managedSearch})  
              }
            }), 500)
        } else {
          this.setState({searchBooks: []})
        }
      } catch (error) {
        this.setState({searchBooks: []})
      }
    }


    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input value={this.state.input} onChange={this.onSearch} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchBooks.map(book =>
                  <li key={book.id}><Book book={book} onChangeShelf={this.onChangeShelf} /></li>
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchView