import { Link } from 'react-router-dom'

const AddBooks = () => {
  return(
    <div className="open-search">
      <Link to='/search'>
        <button>Add a book</button>
      </Link>
    </div>
  )
}

export default AddBooks