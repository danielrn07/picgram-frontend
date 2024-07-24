import styled from 'styled-components'

export const PhotoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;

  .user-name {
    font-weight: bold;
  }
`

export const CreatedBy = styled.div`
  margin-bottom: 0.8rem;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 1.6rem;
  }
`

export const PhotoTitle = styled.h1`
  font-size: 1.6rem;
`

export const Photo = styled.img`
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  margin-bottom: 0.8rem;

  @media (min-width: 481px) {
    width: 40rem;
    height: 40rem;
  }
`
