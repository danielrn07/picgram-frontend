import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import { profile, resetMessage, updateProfile } from '../../slices/userSlice'
import { uploads } from '../../utils/config'
import { EditProfileContainer, ProfileImage } from './styles'

const EditProfile = () => {
  const dispatch = useDispatch()

  const { user, message, error, loading } = useSelector((state) => state.user)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [bio, setBio] = useState('')
  const [previewImage, setPreviewImage] = useState('')

  // Load user data
  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  // Fill form with user data
  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setEmail(user.email || '')
      setBio(user.bio || '')
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      name,
    }

    if (profileImage) {
      userData.profileImage = profileImage
    }

    if (bio) {
      userData.bio = bio
    }

    if (password) {
      userData.password = password
    }

    // Build form data
    const formData = new FormData()

    for (const key in userData) {
      formData.append(key, userData[key])
    }

    await dispatch(updateProfile(formData))

    setTimeout(() => {
      dispatch(resetMessage())
    }, 2000)
  }

  const handleFile = (e) => {
    const image = e.target.files[0]

    setPreviewImage(image)

    setProfileImage(image)
  }

  return (
    <EditProfileContainer>
      <h1>Edite seus dados</h1>
      <p className='subtitle'>Adicione uma imagem de perfil e conte mais sobre você.</p>
      {(user.profileImage || previewImage) && (
        <ProfileImage
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={`Imagem de perfil do usuário ${user.name}`}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input type='email' placeholder='E-mail' value={email} disabled />
        <label>
          <span>Imagem de perfil</span>
          <input type='file' onChange={handleFile} />
        </label>
        <label>
          <span>Bio</span>
          <input
            type='text'
            placeholder='Descrição do perfil'
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input
            type='password'
            placeholder='Digite a nova senha'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!loading && (
          <button type='submit' disabled={loading}>
            {!loading ? 'Atualizar' : 'Aguarde...'}
          </button>
        )}

        {error && <Message msg={error} type='error' />}
        {message && <Message msg={message} type='success' />}
      </form>
    </EditProfileContainer>
  )
}

export default EditProfile
