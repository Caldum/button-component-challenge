import styled from 'styled-components'

export const FooterComponent = styled.footer`
    display: flex;
    flex-direction: column;
`

export const IconsSource = styled.span`
    color: #828282;
    font-family: Ubuntu Mono;
    font-size: 12px;
`

export const CreatedBy = styled.span`
    color: #A9A9A9;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
`

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

export const HighlightLink = styled(Link)`
    text-decoration: underline;
    font-weight: 700;
`