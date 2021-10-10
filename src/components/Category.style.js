import styled from 'styled-components'
import { BiPound } from 'react-icons/bi'


export const SubCategories = styled.div`
    display: ${props => props.display};
    justify-content: space-around;
    background-color: white;
    border-radius: 1rem;
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

    input {
        margin-right: 1rem;
        height: 4rem;
    }
`

export const SubCatInputs = styled.div`
    display: grid;
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
    }

    p {
        text-align: center;
    }
`

export const CategoriesTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      &:active {
        color: dodgerblue;
        text-decoration: underline;
      }
    }
`

export const Pound = styled(BiPound)`
    position: absolute;
    left: 4px;
`

export const ToggleButton = styled.div`
    display: flex;
    align-items: center;

    p {
      margin-right: 2rem;
    }
`

export const CategoryWrap = styled.div`

`
