//import React from 'react'
import './App.css'
import Navbar from "../components/Navbar"
// import Hero from "../components/Hero"
// import data from "./data"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  ThemeProvider, createTheme } from '@mui/material'
import Feed from '../components/Feed'
import { useState } from 'react'
import SearchFeed from '../components/SearchFeed'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })
 
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" exact element={<Feed darkMode={darkMode}/>}/>
          <Route path="/search/:searchTerm"  element={<SearchFeed />}/>
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
