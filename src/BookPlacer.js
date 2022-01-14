const BookPlacer = ({book, changeShelf}) => {
    const moveBook = (e) => {
        changeShelf(book, e.target.value);
    }

    return(
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={moveBook}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}


export default BookPlacer