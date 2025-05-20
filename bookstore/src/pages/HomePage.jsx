import React from 'react'
import Navbar from '../components/Navbar'
import HomePageSlice from '../components/HomePageSlice'
import BookList from '../components/BookList'
import BookFilter from '../components/BookFilter'

function HomePage() {
  return (
    <div>
      <div>
        <HomePageSlice />
      </div>
      <div className="flex">
        <div className="w-2/12 px-2 border-r-1">
          <BookFilter />
        </div>
        <div className="w-9/12 ">
          <BookList />
        </div>
      </div>

    </div>
  )
}

export default HomePage