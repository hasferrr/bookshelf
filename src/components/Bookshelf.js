import './Bookshelf.css'

const Bookshelf = ({ bookshelf }) => {
  const createCard = book => {
    return (
      <div key={book.title + book.author} className='card'>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.pages} pages</p>
        <p>{String(book.finish)}</p>
      </div>
    )
  }

  return (
    <div className='Bookshelf'>
      {bookshelf.map(book => createCard(book))}
    </div>
  )
}

export default Bookshelf