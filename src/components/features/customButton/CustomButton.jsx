import { useCustomButton } from "../../../hooks/useCustomButon"
import { Container, Title, ConfigWrapper, SelectBox, SelectComponent } from "./CustomButtonStyles"
import Button from "../../shared/button/Button"

const CustomButton = () => {
    const {
        variant,
        disabledShadow,
        disabledButton,
        size,
        color,
        hasIcon,
        icon,
        handleSelection
    } = useCustomButton()

    return (
        <Container>
            <Title>Customize a button</Title>
            <ConfigWrapper>
                <SelectBox>
                    Variant
                    <SelectComponent
                        name="variant"
                        value={variant}
                        onChange={e => handleSelection(e.target)}
                    >
                        <option value='default'>Default</option>
                        <option value='outline'>Outline</option>
                        <option value='text'>Text</option>
                    </SelectComponent>
                </SelectBox>
                <SelectBox>
                    Disabled shadow
                    <SelectComponent
                        name="disabledShadow"
                        value={disabledShadow}
                        onChange={e => handleSelection(e.target)}
                    >
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </SelectComponent>
                </SelectBox>
                <SelectBox>
                    Disabled button
                    <SelectComponent
                        name="disabledButton"
                        value={disabledButton}
                        onChange={e => handleSelection(e.target)}
                    >
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </SelectComponent>
                </SelectBox>
                <SelectBox>
                    Size
                    <SelectComponent
                        name="size"
                        value={size}
                        onChange={e => handleSelection(e.target)}
                    >
                        <option value='sm'>Small</option>
                        <option value='md'>Medium</option>
                        <option value='lg'>Large</option>
                    </SelectComponent>
                </SelectBox>
                <SelectBox>
                    Color
                    <SelectComponent
                        name="color"
                        value={color}
                        onChange={e => handleSelection(e.target)}
                    >
                        <option value='default'>Default</option>
                        <option value='primary'>Primary</option>
                        <option value='secondary'>Secondary</option>
                        <option value='danger'>Danger</option>
                    </SelectComponent>
                </SelectBox>
                <SelectBox>
                    With icon
                    <SelectComponent
                        name="hasIcon"
                        value={hasIcon}
                        onChange={e => handleSelection(e.target)}
                    >
                        <option value='no'>No</option>
                        <option value='startIcon'>Start icon</option>
                        <option value='endIcon'>End icon</option>
                    </SelectComponent>
                </SelectBox>
                {
                    hasIcon !== 'no' &&
                    <SelectBox>
                        Select icon
                        <SelectComponent
                            name="icon"
                            value={icon}
                            onChange={e => handleSelection(e.target)}
                        >
                            <option value='local_grocery_store'>Shopping Cart</option>
                            <option value='home'>Home</option>
                            <option value='settings'>Settings</option>
                            <option value='favorite'>Favorite</option>
                            <option value='delete'>Delete</option>
                        </SelectComponent>
                    </SelectBox>
                }
            </ConfigWrapper>
            <Button
                variant={variant}
                disableShadow={disabledShadow === 'no' ? false : true}
                disabled={disabledButton === 'no' ? false : true}
                size={size}
                color={color}
                startIcon={hasIcon === 'startIcon' ? icon : null}
                endIcon={hasIcon === 'endIcon' ? icon : null}
            >Custom</Button>
        </Container>
    )
}

export default CustomButton