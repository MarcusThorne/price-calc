import styled from 'styled-components'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export const AppWrap = styled.div`
  align-items: center;
  width: 40%;
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

export const SubTitle = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: end;
  margin: 4rem 4rem 0 4rem;

  div {
    border-right: 1px solid rgb(200, 200, 200);
  }

  h4 {
    margin: 0 1rem;
    font-weight: 400;
  }
`

export const SubCategories = styled.div`
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  height: ${props => props.height};
  display: ${props => props.display};
  margin: 0 4rem;

  input {
    width: 3rem;
    border: 1px solid rgb(220, 220, 220);
    padding: 1rem;
    font-size: 16px;
    margin-right: 3rem;
    overflow: hidden;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    margin-right: 1rem;
    width: 4rem;
    white-space: nowrap;
  }

  i {
    margin: 0 0.5rem 0 1rem;
  }
`

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
