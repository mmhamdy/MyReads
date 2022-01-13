import React from 'react'

class LibraryTitle extends React.Component {
    render() {
        return(
            <div className="list-books-title">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default LibraryTitle