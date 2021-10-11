import styled from 'styled-components'
import { BiPound } from 'react-icons/bi'
import { BsCheckCircle } from 'react-icons/bs'

export const Tick = styled(BsCheckCircle)`
  color: ${props => props.color};
  margin-right: 2rem;
  font-size: 1.5rem;
`

export const SubCategories = styled.div`
    display: ${props => props.display};
    justify-content: space-around;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    margin: 0 2rem;
    padding: 1rem 0;
`

export const SubCatColumns = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    width: 70%;
`

export const SubCatTitle = styled.div`
    display: flex;
    width: 20rem;
    align-items: center;
        font-size: 14px;


    input {
        margin-right: 1rem;
        height: 4rem;
    }
`

export const SubCatInputs = styled.div`
    display: ${props => props.display};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: end;
    grid-gap: 1rem;
    overflow: hidden;

    div {
        display: flex;
        align-items: center;
        position: relative;
    }

    input {
        text-align: center;
        border: 1px solid rgba(0,0,0,0.1);
        padding: 1rem;
    }

    p {
        text-align: center;
    }
`

export const Title = styled.h4`
    color: ${props => props.color};
    text-decoration: ${props => props.textDecoration};
    border-bottom: ${props => props.border};
    padding: 1rem 0;
    width: 20%;
    text-align: center;
    margin: 0;
    margin-bottom: -2px;
    font-size: 16px;
    background-color: ${props => props.bgColor};
    border-radius: 10px 10px 0 0;
`

export const CategoriesTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(240, 240, 240);
    padding: 0;
    background-color: #F5F6F7;
`

export const Pound = styled(BiPound)`
    position: absolute;
    left: 8px;
`

export const ToggleButton = styled.div`
    display: flex;
    align-items: center;

    p {
      margin-right: 2rem;
    }
`

export const CategoryWrap = styled.div`
  border-radius: 10px;
  background-color: white;
  margin: 1rem;
  box-shadow: 1px 1px 8px rgba(50,50,50,0.1);
`

SubCatInputs.defaultProps = {
  display: "grid",
}
