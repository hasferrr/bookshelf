import React from 'react'
import { useState } from 'react'
import './App.css'
import './Navigation.css'
import './Bookshelf.css'

const App = () => {
  const dummies = [
    new Book('Functional Programming', 'author', 100, true),
    new Book('Functional Programming', 'author', 100, true),
    new Book('Functional Programming', 'author', 100, true)
  ]
  const [bookshelf, setBookshelf] = useState(dummies)

  function Book(title, author, pages, finish) {
    this.title = title
    this.author = author
    this.pages = pages
    this.finish = finish
  }

  const addBookToBookshelf = book => {
    setBookshelf(bookshelf.concat(book))
  }

  return (
    <div className='App'>
      <Navigation />
      <Bookshelf bookshelf={bookshelf} />
    </div>
  )
}

const Navigation = () => {
  return (
    <div className='Navigation'>
      <div className='title'>My Library</div>
    </div>
  )
}

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

export default App
