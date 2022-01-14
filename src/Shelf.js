import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    populate = () => {
        BooksAPI.getAll().then(books => this.setState({books}))
    }

    reposition = (book, shelf) => {
        BooksAPI.update(book, shelf).then(result => this.populate())
    }

    shelfTitle = this.props.shelfTitle;
    shelfKey = this.props.shelfKey;

    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.filter(book => book.shelf === this.props.shelfKey).map((book) => (
                             <li key={book.id}><Book book={book} onChangeShelf={this.reposition} /></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf