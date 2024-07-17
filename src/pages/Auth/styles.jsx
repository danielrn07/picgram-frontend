import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;

  div {
    form {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    form input {
      padding: 1rem;
      min-width: 300px;
    }

    form button {
      min-width: 100%;
    }

    .auth-panel {
      display: flex;
      gap: 0.8rem;
      border-top: 1px solid #ccc;
      width: 80%;
      justify-content: center;
      padding-top: 3.2rem;
    }

    .auth-panel a {
      color: rgb(0, 149, 246);
      font-weight: bold;
    }
  }
`

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  gap: 3.2rem;
  border: 1px solid rgb(230, 230, 230);
  padding: 3.2rem;
`

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
`

export const Subtitle = styled.h2`
  max-width: 60%;
  text-align: center;
  color: rgb(115, 115, 115);
  font-weight: bold;
  font-size: 1.6rem;
`
