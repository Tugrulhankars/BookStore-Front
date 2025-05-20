import React from 'react'
import Navbar from '../components/Navbar'
import HomePageSlice from '../components/HomePageSlice'
import BookCard from '../components/BookCard'
import Footer from '../components/Footer'
import BookList from '../components/BookList'
import BookFilter from '../components/BookFilter'
import { Outlet } from 'react-router'
function MainLayout() {
  return (
    <div>
        <Navbar/>  
         <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default MainLayout