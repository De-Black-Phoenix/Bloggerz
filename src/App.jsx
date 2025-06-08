import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import OpenBlogPage from './Pages/OpenBlogPage'
import AuthorProfilePage from './Pages/AuthorProfilePage'
import NotFound from "./Pages/NotFound"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blog/:id" element={<OpenBlogPage />} />
      <Route path="/author/:id" element={<AuthorProfilePage />} />

      {/* Catch all undefined route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App