import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home.js'
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { Login } from '../pages/Login.js'
import { User } from '../pages/User.js'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
