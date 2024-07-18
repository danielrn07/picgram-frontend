import styled from 'styled-components'

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid rgb(230, 230, 230);
  padding: 3rem;
  max-width: 80%;
  margin: auto;

  .subtitle {
    color: rgb(115, 115, 115);
    font-size: 1.4rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-size: 1.4rem;
  }

  form label {
    display: flex;
    flex-direction: column;
  }

  form input {
    padding: 0.8rem;
  }

  form button {
    min-width: 100%;
  }
`

export const ProfileImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
`
