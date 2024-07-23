import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { like } from '../../slices/photoSlice'
import { uploads } from '../../utils/config'
import Like from '../Like/Like'
import { CreatedBy, InfoContainer, Photo, PhotoItemContainer, PhotoTitle } from './styles'

const PhotoItem = ({ photo }) => {
  const { user } = useSelector((state) => state.auth)
  const { loading, error, message } = useSelector((state) => state.photo)
  const dispatch = useDispatch()

  const handleLike = () => {
    dispatch(like(photo._id))
  }

  return (
    <PhotoItemContainer>
      <div>
        <CreatedBy>
          Publicada por{' '}
          <Link className='user-name' to={`/users/${photo.userId}`}>
            {photo.userName}
          </Link>{' '}
        </CreatedBy>
        {photo.image && <Photo src={`${uploads}/photos/${photo.image}`} alt={`photo.title`} />}
        <InfoContainer>
          <Like photo={photo} user={user} handleLike={handleLike} />
          <PhotoTitle>{photo.title}</PhotoTitle>
        </InfoContainer>
      </div>
    </PhotoItemContainer>
  )
}

export default PhotoItem
