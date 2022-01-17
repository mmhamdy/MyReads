import Shelf from "./Shelf"
import AddBooks from "./AddBooks"

const Library = ({title, books, onChangeShelf}) => {
    const shelves = [
        {
          key: "currentlyReading",
          title: "Currently Reading",
        },
        {
          key: "wantToRead",
          title: "Want to Read",
        },
        {
          key: "read",
          title: "Read",
        }
      ]

    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>{title}</h1>
          </div>
          <ol className="bookshelf">
            {
              shelves.map(shelf => 
                <li key={shelf.key}>
                  <Shelf shelfTitle={shelf.title} shelfKey={shelf.key} books={books} onChangeShelf={onChangeShelf}/>
                </li>
              )
            }
          </ol> 
          <AddBooks />
        </div>
    )
}

export default Library