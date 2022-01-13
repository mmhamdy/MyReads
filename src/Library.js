import React from 'react'
import AddBooks from './AddBooks'
import LibraryContent from './LibraryContent'
import LibraryTitle from './LibraryTitle'

class Library extends React.Component {
    render() {
        return(
            <div className="list-books">
                <LibraryTitle title='MyReads'/>
                <LibraryContent />
                <AddBooks />
            </div>
        )
    }
}

export default Library