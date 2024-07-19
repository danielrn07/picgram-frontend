import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
`

export const ProfileHeader = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 1.6rem;
  gap: 3.2rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
  border-bottom: 1px solid rgb(230, 230, 230);

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  form input {
    padding: 0.8rem;
  }

  form label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`

export const ProfileImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
`

export const PhotosContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`

export const Photo = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
  margin-bottom: 0.8rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  font-size: 2.4rem;
  gap: 0.8rem;

  svg {
    cursor: pointer;
  }
`
