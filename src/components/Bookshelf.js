import './Bookshelf.css'

const Bookshelf = ({ bookshelf, setBookshelf, toggleWillAdd, removeBook }) => {
  const toggleStatus = id => {
    for (let i = 0; i < bookshelf.length; i++) {
      if (bookshelf[i].id === id) {
        const newBookshelf = [...bookshelf]
        const book = bookshelf[i]
        book.finish = !book.finish
        newBookshelf[i] = book
        setBookshelf(newBookshelf)
        return
      }
    }
  }

  const createCard = book => {
    return (
      <div key={book.id} className='card'>
        <p>{book.title}</p>
        <p>by {book.author}</p>
        <p>{book.pages} pages</p>
        <p>Status:{' '}
          <span className='read' onClick={() => toggleStatus(book.id)}>
            {book.finish ? 'Readed' : 'Not readed yet'}
          </span>
        </p>
        <button onClick={() => removeBook(book.id)}>Remove</button>
      </div>
    )
  }

  return (
    <div className='Bookshelf'>
      {bookshelf.map(book => createCard(book))}
      <button className='card add-book' onClick={toggleWillAdd}>
        + Add Book
      </button>
    </div>
  )
}

export default Bookshelf