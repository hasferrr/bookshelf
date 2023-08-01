import './AddBook.css'
import './coolcheckbox.css'

const AddBook = ({ willAdd, addBook, addBookToBookshelf, inputBook, setInputBook }) => {
  const submitBook = event => {
    event.preventDefault()
    addBookToBookshelf()
  }

  const handleOnChange = toChange => event => {
    const newInputBook = { ...inputBook }
    newInputBook[toChange] = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value
    setInputBook(newInputBook)
  }

  if (willAdd) {
    return (
      <>
        <div className='AddBook' onClick={addBook}></div>
        <div className='add-book-form flex-down'>
          <form className='flex-down'>
            <p>Add new book</p>
            <input value={inputBook.title} onChange={handleOnChange('title')} placeholder='Title' />
            <input value={inputBook.author} onChange={handleOnChange('author')} placeholder='Author' />
            <input value={inputBook.pages} onChange={handleOnChange('pages')} placeholder='Pages'
              type='number'
            />
            <div className='flex-right checkbox-wrapper-2'>
              <label htmlFor='read'>Have you read it?</label>
              <input
                type='checkbox'
                id='read'
                className='sc-gJwTLC ikxBAC'
                onChange={handleOnChange('finish')}
              />
            </div>
            <input type='submit' value='Submit' className='btn' onClick={submitBook}></input>
          </form>
        </div>
      </>
    )
  }
}

export default AddBook