import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContainer, RegisterContent, Subtitle, Title } from './styles'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      password,
      confirmPassword,
    }
  }

  return (
    <AuthContainer>
      <RegisterContent>
        <Title>PicGram</Title>
        <Subtitle>Cadastre-se para ver fotos e vídeos dos seus amigos.</Subtitle>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nome'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type='email'
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type='password'
            placeholder='Confirme a senha'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <button type='submit'>Cadastrar</button>
        </form>
        <div className='auth-panel'>
          <p>Tem uma conta?</p>
          <Link to='/login'>Conecte-se</Link>
        </div>
      </RegisterContent>
    </AuthContainer>
  )
}

export default Register
