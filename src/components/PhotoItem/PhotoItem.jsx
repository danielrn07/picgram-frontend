import { Link } from 'react-router-dom'
import { uploads } from '../../utils/config'
import { Photo, PhotoItemContainer, PhotoTitle } from './styles'

const PhotoItem = ({ photo }) => {
  return (
    <PhotoItemContainer>
      {photo.image && <Photo src={`${uploads}/photos/${photo.image}`} alt={`photo.title`} />}
      <PhotoTitle>{photo.title}</PhotoTitle>
      <p>
        Publicada por <Link className='user-name' to={`/users/${photo.userId}`}>{photo.userName}</Link>{' '}
      </p>
    </PhotoItemContainer>
  )
}

export default PhotoItem
