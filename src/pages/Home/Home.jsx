import Like from '../../components/Like/Like'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos, like } from '../../slices/photoSlice'
import { useEffect } from 'react'
import { HomeContainer } from './styles'

const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { photos, loading } = useSelector((state) => state.photo)

  // Load all photos
  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  // Like a photo
  // const handleLike = () => {
  //   dispatch(like(photo._id))
  // }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <HomeContainer>
      {photos && photos.map((photo) => (
        <div className='photo-container' key={photo._id}>
          <PhotoItem photo={photo} />
        </div>
      ))}
      {photos && photos.length === 0 && (
        <h2>Ainda não há fotos publicadas.</h2>
      )}
    </HomeContainer>
  )
}

export default Home
