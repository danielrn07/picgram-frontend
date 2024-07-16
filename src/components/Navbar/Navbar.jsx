import { BsFillCameraFill, BsFillPersonFill, BsHouseDoorFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { NavLinks, NavbarContainer } from './styled'

const Navbar = () => {
  const { auth } = useAuth()
  const { user } = useSelector((state) => state.auth)

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

            <NavLink to='/logout'>
              Sair
            </NavLink>
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
