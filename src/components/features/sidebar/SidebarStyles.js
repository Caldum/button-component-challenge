import styled from 'styled-components'

export const Container = styled.aside`
    padding: 2.5rem 3rem;
    height: 100vh;
    width: fit-content;
    background-color: #FAFBFD;
    display: flex;
    flex-direction: column;
    gap: 7.5rem;
`

export const TextLogo = styled.div`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 13px;
`

export const PrimaryText = styled.span`
    color: #F7542E;
`

export const SecondaryText = styled.span`
    color: #090F31;
`

export const Navbar = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.875rem;
`

export const MenuItem = styled.li`
    font-family: 'Noto Sans JP';
    font-size: 14px;
    ${props => props.selected ? `
        font-weight: 700;
        color: #090F31;
        cursor: default;
    ` : `
        font-weight: 500;
        color: #9E9E9E;
        cursor: pointer;

        &:hover {
            font-weight: 700;
            color: #090F31;
        }
    `}
`