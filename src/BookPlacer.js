import React from 'react' 

class BookPlacer extends React.Component {
    onChangeBookShelf = this.props.onChangeBookShelf;

    handleChange = (e) => {
        this.onChangeBookShelf(this.props.bookId, e.target.value);
    }
    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={this.handleChange}>
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