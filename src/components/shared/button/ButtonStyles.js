import styled, { css } from 'styled-components'
import { colors, sizes } from '../../../utils/data'

const defaultStateStyles = css`
    background-color: ${props => props.color && colors[props.color] ? colors[props.color].hover : colors.primary.hover};
`

const outlineStateStyles = css`
    background-color: ${props => props.color === 'default' ? `${colors[props.color].default}50` : `${colors[props.color].default}10`};
`

const textStateStyles = css`
    background-color: ${props => props.color === 'default' ? `${colors[props.color].default}50` : `${colors[props.color].default}10`};
`

const defaultStyles = css`
    &:hover:enabled, &:focus-visible {
        ${defaultStateStyles}
    }

    &:disabled {
        background-color: #E0E0E0;
    }

    ${props => props.$isHovered && defaultStateStyles}
`
const outlineStyles = css`
    color: ${props => props.color === 'default' ? '#3F3F3F' : colors[props.color].default};
    background-color: #FFFFFF;
    border: 1px solid ${props => props.color && colors[props.color].default};

    &:hover:enabled, &:focus-visible {
        ${outlineStateStyles}
    }

    &:disabled {
        color: #575757;
        border-color: #575757;
    }

    ${props => props.$isHovered && outlineStateStyles}
`

const textStyles = css`
    color: ${props => props.color === 'default' ? '#3F3F3F' : colors[props.color].default};
    background-color: transparent;

    &:hover:enabled, &:focus-visible {
        ${textStateStyles}
    }

    &:disabled {
        padding: 0;
    }

    ${props => props.$isHovered && textStateStyles}
`

export const ButtonComponent = styled.button`
    color: ${props => props.color === 'default' ? '#3F3F3F' : '#FFFFFF'};
    background-color: ${props => props.color && colors[props.color] ? colors[props.color].default : colors.primary.default};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Noto Sans JP';
    font-size: 14px;
    width: fit-content;
    padding: ${props => props.size && sizes[props.size] ? sizes[props.size].padding : sizes.md.padding};
    border: none;
    border-radius: 6px;
    box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.20);
    outline: none;
    cursor: pointer;

    &:disabled {
        color: #9E9E9E;
        cursor: not-allowed;
        box-shadow: none;
    }

    &:active:enabled {
        transform: translateY(3px);
    }

    ${props => {
        switch (props.$variant) {
            case 'outline':
                return outlineStyles
            case 'text':
                return textStyles
            default:
                return defaultStyles
        }
    }
    }

    ${props => props.$disableShadow && `
        box-shadow: none;
    `}
`

export const Icon = styled.span`
    font-family: 'Material Icons';
    font-size: 18px;
    align-self: end;
`