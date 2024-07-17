import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register, reset } from '../../slices/authSlice'
import { AuthContainer, AuthContent, Subtitle, Title } from './styles'
import Message from '../../components/Message/Message'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      password,
      confirmPassword,
    }

    dispatch(register(user))
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <AuthContainer>
      <AuthContent>
        <Title>PicGram</Title>
        <Subtitle>Cadastre-se para ver fotos de amigos.</Subtitle>
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
          {!loading && (
            <button type='submit' disabled={loading}>
              {!loading ? 'Cadastrar' : 'Aguarde...'}
            </button>
          )}

          {error && <Message msg={error} type='error' />}
        </form>
        <div className='auth-panel'>
          <p>Tem uma conta?</p>
          <Link to='/login'>Conecte-se</Link>
        </div>
      </AuthContent>
    </AuthContainer>
  )
}

export default Register
