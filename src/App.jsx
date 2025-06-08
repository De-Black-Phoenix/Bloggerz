import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import OpenBlogPage from './Pages/OpenBlogPage'
import AuthorProfilePage from './Pages/AuthorProfilePage'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blog/:id" element={<OpenBlogPage />} />
      <Route path="/author/:id" element={<AuthorProfilePage />} />
    </Routes>
  )
}

export default App