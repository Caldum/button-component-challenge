import { ButtonComponent, Icon } from "./ButtonStyles"

const Button = ({
    size = 'md',
    color = 'primary',
    variant,
    isHovered,
    disableShadow,
    disabled,
    startIcon,
    endIcon,
    children,
    ...rest
}) => {
    return (
        <ButtonComponent
            size={size}
            color={color}
            $variant={variant}
            $isHovered={isHovered}
            $disableShadow={disableShadow}
            disabled={disabled}
            {...rest}
        >
            {
                startIcon &&
                <Icon className="material-icons-round">{startIcon}</Icon>
            }
            {children}
            {
                endIcon &&
                <Icon className="material-icons-round">{endIcon}</Icon>
            }
        </ButtonComponent>
    )
}

export default Button