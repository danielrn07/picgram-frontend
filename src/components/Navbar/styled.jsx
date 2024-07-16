import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  padding: 2rem;
  font-size: 1.4rem;

  .logo {
    flex-grow: 1;
  }

  form {
    position: relative;
    display: flex;
  }

  form svg {
    position: absolute;
    align-self: center;
    left: 0.8rem;
  }

  form input {
    padding-left: 2.5rem;
  }

  a {
    color: rgb(250, 250, 250);
  }

  .logout {
    color: rgb(250, 250, 250);
    cursor: pointer;
  }

  @media (min-width: 769px) {
    padding: 2rem 20rem;

    a {
      font-size: 1.6rem;
    }
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-end;

  a {
    color: rgb(250, 250, 250);
  }

  svg {
    font-size: 2rem;
    color: rgb(250, 250, 250);
  }

  @media (min-width: 769px) {
    a {
      font-size: 1.6rem;
    }
  }
`
