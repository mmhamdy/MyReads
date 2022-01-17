import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchView extends React.Component {
    state = {
        searchBooks: [],
        input: "",
    }

    books = this.props.books
    onChangeShelf = this.props.onChangeShelf

    onSearch = (e) => {
      const query = e.target.value;
      this.setState({input: query});
      try {
        if(query.length > 0) {
          BooksAPI.search(query).then(searchBooks => {
            if(searchBooks.error){
              this.setState({searchBooks: []})
            } else {
              this.setState({searchBooks: searchBooks})
            }
          })
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