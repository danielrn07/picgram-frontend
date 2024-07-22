import { useEffect, useRef, useState } from 'react'
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Message from '../../components/Message/Message'
import {
  deletePhoto,
  getUserPhotos,
  publishPhoto,
  resetMessage,
  updatePhoto,
} from '../../slices/photoSlice'
import { getUserDetails } from '../../slices/userSlice'
import { uploads } from '../../utils/config'
import {
  ActionsContainer,
  EditPhotoContainer,
  FormContainer,
  Photo,
  PhotosContainer,
  PhotosContent,
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
} from './styles'

const Profile = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => state.user)
  const { user: userAuth } = useSelector((state) => state.auth)
  const {
    photos,
    loading: loadingPhoto,
    message: messagePhoto,
    error: errorPhoto,
  } = useSelector((state) => state.photo)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const [editId, setEditId] = useState('')
  const [editImage, setEditImage] = useState('')
  const [editTitle, setEditTitle] = useState('')

  const newPhotoForm = useRef()
  const editPhotoForm = useRef()

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id))
    dispatch(getUserPhotos(id))
  }, [dispatch, id])

  if (loading) {
    return <p>Carregando...</p>
  }

  const handleFile = (e) => {
    const image = e.target.files[0]

    setImage(image)
  }

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage())
    }, 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const photoData = {
      title,
      image,
    }

    // Build form data
    const formData = new FormData()

    for (const key in photoData) {
      formData.append(key, photoData[key])
    }

    await dispatch(publishPhoto(formData))

    setTitle('')

    resetComponentMessage()
  }

  const handleDeletePhoto = (id) => {
    dispatch(deletePhoto(id))

    resetComponentMessage()
  }

  // Show or hide forms
  const showOrHideForms = () => {
    newPhotoForm.current.classList.toggle('hide')
    editPhotoForm.current.classList.toggle('hide')
  }

  // Update a photo
  const handleUpdate = (e) => {
    e.preventDefault()

    const photoData = {
      title: editTitle,
      id: editId,
    }

    dispatch(updatePhoto(photoData))

    resetComponentMessage()
  }

  const handleCancelEdit = (e) => {
    showOrHideForms()
  }

  const handleEdit = (photo) => {
    if (editPhotoForm.current.classList.contains('hide')) {
      showOrHideForms()
    }

    setEditId(photo._id)
    setEditTitle(photo.title)
    setEditImage(photo.image)
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        {user.profileImage && (
          <ProfileImage
            src={`${uploads}/users/${user.profileImage}`}
            alt={`Imagem de perfil do usuário ${user.name}`}
          />
        )}
        <ProfileInfo>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </ProfileInfo>
      </ProfileHeader>
      {id === userAuth._id && (
        <>
          <FormContainer ref={newPhotoForm}>
            <h3>Compartilhe seus momentos</h3>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Título para foto:</span>
                <input
                  type='text'
                  placeholder='Insira um título'
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </label>
              <label>
                <span>Imagem:</span>
                <input type='file' onChange={handleFile} />
              </label>
              <button type='submit' disabled={loading}>
                {!loading ? 'Postar' : 'Aguarde...'}
              </button>

              {errorPhoto && <Message msg={errorPhoto} type='error' />}
              {messagePhoto && <Message msg={messagePhoto} type='success' />}
            </form>
          </FormContainer>

          <EditPhotoContainer className='hide' ref={editPhotoForm}>
            <p>Editando</p>
            {editImage && <Photo src={`${uploads}/photos/${editImage}`} alt={editTitle} />}

            <form onSubmit={handleUpdate}>
              <input type='text' onChange={(e) => setEditTitle(e.target.value)} value={editTitle} />

              <button type='submit' disabled={loading}>
                {!loading ? 'Atualizar' : 'Aguarde...'}
              </button>
              <button onClick={handleCancelEdit}>Cancelar</button>

              {errorPhoto && <Message msg={errorPhoto} type='error' />}
              {messagePhoto && <Message msg={messagePhoto} type='success' />}
            </form>
          </EditPhotoContainer>
        </>
      )}
      <PhotosContainer>
        <h2>Fotos publicadas</h2>
        <PhotosContent>
          {photos &&
            photos.map((photo) => (
              <div key={photo._id}>
                {photo.image && (
                  <>
                    <Photo src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
                    <p>{photo.title}</p>
                  </>
                )}
                {id === userAuth._id ? (
                  <ActionsContainer>
                    <Link to={`/photos/${photo._id}`}>
                      <BsFillEyeFill />
                    </Link>
                    <BsPencilFill onClick={() => handleEdit(photo)} />
                    <BsXLg onClick={() => handleDeletePhoto(photo._id)} />
                  </ActionsContainer>
                ) : (
                  <Link to={`/photos/${photo._id}`}>Ver</Link>
                )}
              </div>
            ))}
        </PhotosContent>
        {photos.length === 0 && <p>Sem publicações.</p>}
      </PhotosContainer>
    </ProfileContainer>
  )
}

export default Profile
