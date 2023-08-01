import './Bookshelf.css'

const Bookshelf = ({ bookShelf, toggleWillAdd, removeBook }) => {
  const createCard = book => {
    return (
      <div key={book.id} className='card'>
        <p>{book.title}</p>
        <p>by {book.author}</p>
        <p>{book.pages} pages</p>
        <p>Status: {book.finish ? 'Readed' : 'Not readed yet'}</p>
        <button onClick={() => removeBook(book.id)}>Remove</button>
      </div>
    )
  }

  return (
    <div className='Bookshelf'>
      {bookShelf.map(book => createCard(book))}
      <button className='card add-book' onClick={toggleWillAdd}>
        + Add Book
      </button>
    </div>
  )
}

export default Bookshelf