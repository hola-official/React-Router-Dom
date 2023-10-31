import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import Footer from './Footer'

const App = () => {
  const [search, setSearch] = useState('')
  const [post, setPost] = useState([
    {
      id: 1,
      title: "Rocco",
      date: 'July 01, 2021 11:12:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque quo, neque quas quaerat vel perspiciatis! Dolorum, consectetur! Veniam doloremque quidem quam recusandae beatae sint.'
    }
  ])
  const [searchResult, setSearchResult] = useState([])
  return (
    <div className='App'>
      <Header title='DLT Student Blog' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
