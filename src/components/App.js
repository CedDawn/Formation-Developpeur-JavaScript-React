import { Routes, Route } from 'react-router-dom'
import { Employees } from '../pages/Employees.js'
import { HomePage } from '../pages/HomePage.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  )
}

export default App
