import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    color: #4F4F4F;
    margin: 0;
`

export const ConfigWrapper = styled.div`
    display: flex;
    gap: 0.5rem 2rem;
    flex-wrap: wrap;
`

export const SelectBox = styled.label`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 0.25rem;
    text-wrap: nowrap;
    font-family: 'Noto Sans JP';
    font-size: 12px;
`
export const SelectComponent = styled.select`
    padding: 0.5rem;
    cursor: pointer;
    &focus-widthin {
        outline: none;
    }
`