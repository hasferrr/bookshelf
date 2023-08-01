import React from 'react'
import { useState } from 'react'

import './App.css'

import Navigation from './components/Navigation'
import Bookshelf from './components/Bookshelf'
import AddBook from './components/AddBook'

const App = () => {
  const dummies = [
    new Book('Object-Oriented Programming', 'author', 100, false),
    new Book('Functional Programming', 'author', 100, true)
  ]
  const defaultInputBook = { title: '', author: '', pages: '', finish: false }

  const [bookshelf, setBookshelf] = useState(dummies)
  const [willAdd, setWillAdd] = useState(false)
  const [inputBook, setInputBook] = useState(defaultInputBook)

  function Book(title, author, pages, finish) {
    this.id = Math.random() * 10 ** 18
    this.title = title
    this.author = author
    this.pages = pages
    this.finish = finish
  }

  const addBookToBookshelf = () => {
    const book = new Book(...Object.values(inputBook))
    book.pages = Number(book.pages)
    setBookshelf(bookshelf.concat(book))
    setWillAdd(false)
    setInputBook(defaultInputBook)
  }

  const toggleWillAdd = () => setWillAdd(!willAdd)

  const removeBook = id => setBookshelf(bookshelf.filter(book => book.id !== id))

  return (
    <div className='App'>
      <AddBook
        willAdd={willAdd}
        toggleWillAdd={toggleWillAdd}
        addBookToBookshelf={addBookToBookshelf}
        inputBook={inputBook}
        setInputBook={setInputBook}
      />
      <Navigation />
      <Bookshelf
        bookshelf={bookshelf}
        setBookshelf={setBookshelf}
        toggleWillAdd={toggleWillAdd}
        removeBook={removeBook}
      />
    </div>
  )
}

export default App
