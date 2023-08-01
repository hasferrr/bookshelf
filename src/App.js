import React from 'react'
import { useState } from 'react'

import './App.css'

import Navigation from './components/Navigation'
import Bookshelf from './components/Bookshelf'
import AddBook from './components/AddBook'

const App = () => {
  const dummies = [
    new Book('Functional Programming', 'author', 100, true),
    new Book('Functional Programming', 'author', 100, true),
    new Book('Functional Programming', 'author', 100, true)
  ]
  const [bookshelf, setBookshelf] = useState(dummies)
  const [willAdd, setWillAdd] = useState(false)

  function Book(title, author, pages, finish) {
    this.title = title
    this.author = author
    this.pages = pages
    this.finish = finish
  }

  const addBookToBookshelf = book => {
    setBookshelf(bookshelf.concat(book))
  }

  const addBook = () => setWillAdd(!willAdd)

  return (
    <div className='App'>
      <AddBook willAdd={willAdd} addBook={addBook} />
      <Navigation />
      <Bookshelf bookshelf={bookshelf} addBook={addBook} />
    </div>
  )
}

export default App
