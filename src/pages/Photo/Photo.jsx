import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import { comment, getPhoto, resetMessage } from '../../slices/photoSlice'
import { uploads } from '../../utils/config'
import { CommentsContainer, ProfileImage } from './styles'

const Photo = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { photo, loading, error, message } = useSelector((state) => state.photo)

  const [commentText, setCommentText] = useState('')

  const handleComment = (e) => {
    e.preventDefault()

    const commentData = {
      comment: commentText,
      id: photo._id,
    }

    dispatch(comment(commentData))

    setCommentText('')
    resetMessage()
  }

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <PhotoItem photo={photo} />
      <div>
        {photo.comments && (
          <CommentsContainer>
            <h3>Comentários</h3>
            <form onSubmit={handleComment}>
              <input
                type='text'
                placeholder='Insira seu comentário'
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText}
              />
              <button type='onSubmit'>Enviar</button>
            </form>
            {photo.comments.length === 0 && <p>Não há comentários.</p>}
            {photo.comments.map((comment) => (
              <div key={comment.comment}>
                <div className='user-container'>
                  {comment.userImage ? (
                    <ProfileImage
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={`Foto de perfil do usuário ${comment.userName}`}
                    />
                  ) : (
                    <ProfileImage src='/ic_user.svg' />
                  )}
                  <span>
                    <Link className='user-name' to={`/users/${comment.userId}`}>
                      <p>{comment.userName}</p>
                    </Link>
                    <p>{comment.comment}</p>
                  </span>
                </div>
              </div>
            ))}
          </CommentsContainer>
        )}
      </div>
    </div>
  )
}

export default Photo
