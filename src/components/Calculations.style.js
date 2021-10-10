import styled from 'styled-components'

export const CalculationsWrap = styled.div`
  position: fixed;
  background-color: #05043E;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 16rem;
  padding: 2rem;

  h4 {
    color: white;
  }
`

export const Cover = styled.img`
  width: 10rem;
  height: 5rem;
  object-fit: cover;
`

export const Contain = styled.img`
  width: 10rem;
  object-fit: contain;
`

export const Total = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`
