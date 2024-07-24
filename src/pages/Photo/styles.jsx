import styled from 'styled-components'

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 1280px;
  margin: 2.4rem auto;
  font-size: 1.4rem;

  h3 {
    font-size: 1.6rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  form input {
    padding: 1rem;
    min-width: 300px;
  }

  .user-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .user-name {
    font-weight: bold;
  }
`

export const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`
