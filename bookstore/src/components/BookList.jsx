import React from 'react'
import BookCard from './BookCard'

function BookList() {
  return (
    <div className="grid grid-cols-4 gap-5 px-20 py-2">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      {/* Daha fazla BookCard eklersen, responsive olarak aşağıya geçer */}
    </div>
  )
}

export default BookList