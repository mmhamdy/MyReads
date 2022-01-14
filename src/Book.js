import BookPlacer from './BookPlacer'

const Book = ({book, onChangeShelf}) => {
        return(
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ 
                             width: 128,
                             height: 193, 
                             backgroundImage: `url(${
                                book.imageLinks ? book.imageLinks.thumbnail : ""
                             })`
                             }}></div>
                        <BookPlacer book={book} changeShelf={onChangeShelf}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                </div>   
        )
}


export default Book