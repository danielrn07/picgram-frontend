import { useState } from 'react'
import { BsFillCameraFill, BsFillPersonFill, BsHouseDoorFill, BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { logout, reset } from '../../slices/authSlice'
import { NavLinks, NavbarContainer } from './styles'

const Navbar = () => {
  const { auth } = useAuth()
  const { user } = useSelector((state) => state.auth)

  const [query, setQuery] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate('/login')
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <NavbarContainer>
      <Link to='/' className='logo'>
        PicGram
      </Link>

      <form onSubmit={handleSearch}>
        <BsSearch />
        <input
          type='text'
          placeholder='Pesquisar'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>

      <NavLinks>
        {auth ? (
          <>
            <NavLink to='/'>
              <BsHouseDoorFill />
            </NavLink>

            {user && (
              <NavLink to={`/users/${user._id}`}>
                <BsFillCameraFill />
              </NavLink>
            )}

            <NavLink to='/profile'>
              <BsFillPersonFill />
            </NavLink>

            <span className='logout' onClick={handleLogout}>
              Sair
            </span>
          </>
        ) : (
          <>
            <NavLink to='/login'>Entrar</NavLink>
            <NavLink to='/register'>Cadastrar</NavLink>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
