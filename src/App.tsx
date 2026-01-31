import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
