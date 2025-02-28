import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { useAuth } from './hooks/useAuth'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import EditProfile from './pages/EditProfile/EditProfile'
import Home from './pages/Home/Home'
import Photo from './pages/Photo/Photo'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'

const App = () => {
  const { auth, loading } = useAuth()

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
            <Route path='/profile' element={auth ? <EditProfile /> : <Navigate to='/login' />} />
            <Route path='/users/:id' element={auth ? <Profile /> : <Navigate to='/login' />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to='/' />} />
            <Route path='/photos/:id' element={auth ? <Photo /> : <Navigate to='/login' />} />
            <Route path='/search' element={auth ? <Search /> : <Navigate to='/login' />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
