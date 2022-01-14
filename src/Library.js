import React from 'react'
import AddBooks from './AddBooks'
import Shelf from './Shelf'
// import * as BooksAPI from './BooksAPI'

class Library extends React.Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{this.props.title}</h1>
                </div>
                <Shelf  shelfTitle="Currently Reading" shelfKey="currentlyReading"/>
                <Shelf  shelfTitle="Want to Read" shelfKey="wantToRead"/>
                <Shelf  shelfTitle="Read" shelfKey="read"/>
                <AddBooks />
            </div>
        )
    }
}

export default Library