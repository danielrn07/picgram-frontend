import { BsHouseDoorFill, BsSearch } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { NavLinks, NavbarContainer } from './styled'

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link className='logo' to='/'>PicGram</Link>

      {/* <form>
        <BsSearch />
        <input type='text' placeholder='Pesquisar' />
      </form> */}

      <NavLinks>
        <NavLink to='/'>
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to='/login'>Entrar</NavLink>
        <NavLink to='/register'>Cadastrar</NavLink>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
