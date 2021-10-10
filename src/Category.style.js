import styled from 'styled-components'
import { BiPound } from 'react-icons/bi'


export const SubCategories = styled.div`
    display: ${props => props.display};
    justify-content: space-around;
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

export const Categories = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Pound = styled(BiPound)`
    position: absolute;
    left: 4px;
`
