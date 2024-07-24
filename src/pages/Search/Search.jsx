import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import { useQuery } from '../../hooks/useQuery'
import { searchPhotos } from '../../slices/photoSlice'
import { SearchContainer } from './styles'

const Search = () => {
  const query = useQuery()
  const search = query.get('q')

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { photos, loading } = useSelector((state) => state.photo)

  useEffect(() => {
    dispatch(searchPhotos(search))
  }, [dispatch, search])

  return (
    <SearchContainer>
      <p>Você está pesquisando por: {search}</p>
      {photos &&
        photos.map((photo) => (
          <div className='photo-container' key={photo._id}>
            <PhotoItem photo={photo} />
          </div>
        ))}
      {photos && photos.length === 0 && <h2>Ainda não há fotos publicadas.</h2>}
    </SearchContainer>
  )
}

export default Search
