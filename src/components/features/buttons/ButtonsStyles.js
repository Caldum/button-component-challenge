import styled from 'styled-components'

export const ButtonsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export const ButtonBoxComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 0.25;
    justify-content: space-between;
`

export const Description = styled.span`
    font-family: 'Ubuntu Mono';
    font-size: 12px;
    ${props => props.$stateButton ? `
        color: #828282;
    ` : `
        color: #333333;
    `}
`