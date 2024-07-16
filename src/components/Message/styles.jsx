import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.type === 'success' ? '#D4EDDA' : '#F8D7DA')};
  color: ${(props) => (props.type === 'success' ? '#155724' : '#721C24')};
`
