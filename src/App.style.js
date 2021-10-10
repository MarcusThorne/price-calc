import styled from 'styled-components'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export const AppWrap = styled.div`
  align-items: center;
  width: 70%;
  border: 2px solid dodgerblue;
  border-radius: 1rem;
  padding: 3rem;
  font-family: 'Montserrat', sans-serif;
  color: #262626;
  margin: auto;
  overflow: hidden;

  h4 {
    color: rgb(100, 100, 100);
    font-weight: 400;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
  text-align: center;
`

export const ChevronDown = styled(BsChevronDown)`
  background-color: rgb(225, 225, 225);
  padding: 0.5rem;
  border-radius: 4px;
`

export const ChevronUp = styled(BsChevronUp)`
  background-color: rgb(225, 225, 225);
  padding: 0.5rem;
  border-radius: 4px;
`
