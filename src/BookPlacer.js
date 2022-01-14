import React from 'react' 

class BookPlacer extends React.Component {
    book = this.props.book;
    changeShelf = this.props.changeShelf;

    moveBook = (e) => {
        this.changeShelf(this.book, e.target.value);
    }
    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={this.moveBook}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookPlacer