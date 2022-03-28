import Book from './Book'

const Shelf = ({shelfTitle, shelfKey, books, onChangeShelf}) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === shelfKey).map((book) => (
                         <li key={book.id}><Book book={book} onChangeShelf={onChangeShelf} /></li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Shelf