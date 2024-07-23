import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { LikeContainer } from './styles'

const Like = ({ photo, user, handleLike }) => {
  return (
    <div>
      {photo.likes && user && (
        <LikeContainer>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill onClick={() => handleLike(photo)} />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>
            {photo.likes.length} {photo.likes.length <= 1 ? 'like' : 'likes'}
          </p>
        </LikeContainer>
      )}
    </div>
  )
}

export default Like
