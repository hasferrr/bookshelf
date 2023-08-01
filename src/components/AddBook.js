import './AddBook.css'
import './coolcheckbox.css'

const AddBook = ({ willAdd, addBook }) => {
  if (willAdd) {
    return (
      <>
        <div className='AddBook' onClick={addBook}></div>
        <div className='add-book-form flex-down'>
          <form className='flex-down'>
            <p>Add new book</p>
            <input placeholder='Title'></input>
            <input placeholder='Author'></input>
            <input placeholder='Pages'></input>
            <div className='flex-right checkbox-wrapper-2'>
              <label for='read'>Have you read it?</label>
              <input type='checkbox' id='read' className='sc-gJwTLC ikxBAC'></input>
            </div>
            <input type='submit' value='Submit' className='btn'></input>
          </form>
        </div>
      </>
    )
  }
}

export default AddBook