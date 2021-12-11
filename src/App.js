import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Quiz from './screens/Quiz'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
