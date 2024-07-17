import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../../components/Message/Message'
import { login, reset } from '../../slices/authSlice'
import { AuthContainer, AuthContent, Title } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }

    dispatch(login(user))
  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <AuthContainer>
      <AuthContent>
        <Title>PicGram</Title>
        <form onSubmit={handleSubmit}>
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
          {!loading && (
            <button type='submit' disabled={loading}>
              {!loading ? 'Entrar' : 'Aguarde...'}
            </button>
          )}

          {error && <Message msg={error} type='error' />}
        </form>
        <div className='auth-panel'>
          <p>Não tem uma conta?</p>
          <Link to='/register'>Cadastre-se</Link>
        </div>
      </AuthContent>
    </AuthContainer>
  )
}

export default Login
