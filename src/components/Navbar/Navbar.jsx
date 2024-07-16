import { BsFillCameraFill, BsFillPersonFill, BsHouseDoorFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { logout, reset } from '../../slices/authSlice'
import { NavLinks, NavbarContainer } from './styled'

const Navbar = () => {
  const { auth } = useAuth()
  const { user } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate('/login')
  }

  return (
    <NavbarContainer>
      <Link className='logo' to='/'>
        PicGram
      </Link>

      {/* <form>
        <BsSearch />
        <input type='text' placeholder='Pesquisar' />
      </form> */}

      <NavLinks>
        {auth ? (
          <>
            <NavLink to='/'>
              <BsHouseDoorFill />
            </NavLink>

            <NavLink to={`/users/${user._id}`}>
              <BsFillCameraFill />
            </NavLink>

            <NavLink to='/profile'>
              <BsFillPersonFill />
            </NavLink>

            <span className='logout' onClick={handleLogout}>Sair</span>
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
