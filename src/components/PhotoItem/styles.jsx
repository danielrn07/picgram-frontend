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

export const PhotoTitle = styled.h1`
  text-align: center;
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
