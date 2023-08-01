import React from 'react'
import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Bookshelf from './components/Bookshelf'

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

export default App
