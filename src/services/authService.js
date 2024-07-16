import { api, requestConfig } from '../utils/config'

// Register an user
const register = async (data) => {
  const config = requestConfig('POST', data)

  try {
    const response = await fetch(api + '/users/register', config)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.errors[0])
    }

    const res = await response.json()

    if (res) {
      localStorage.setItem('user', JSON.stringify(res))
    }

    return res
  } catch (error) {
    return { errors: [{ message: error.message }]}
  }
}

// Logout an user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
}

export default authService
