import Wrapper, { Title } from '../../shared/wrapper/Wrapper'
import { ButtonsSection, Group, ButtonBoxComponent, Description } from './ButtonsStyles.js'
import Button from '../../shared/button/Button'
import CustomButton from '../customButton/CustomButton'

const Buttons = () => {
    return (
        <Wrapper>
            <ButtonsSection>
                <Title>Buttons</Title>
                <Group>
                    <ButtonBox label='<Button />'>
                        <Button>Default</Button>
                    </ButtonBox>
                    <ButtonBox stateButton>
                        <Button isHovered>Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button variant="outline" />'>
                        <Button variant='outline'>Default</Button>
                    </ButtonBox>
                    <ButtonBox stateButton>
                        <Button variant='outline' isHovered>Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button variant="text" />'>
                        <Button variant='text'>Default</Button>
                    </ButtonBox>
                    <ButtonBox stateButton>
                        <Button variant='text' isHovered>Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button disableShadow />'>
                        <Button disableShadow>Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button disabled />'>
                        <Button disabled>Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button variant="text" disabled />'>
                        <Button variant="text" disabled>Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button startIcon="local_grocery_store" />'>
                        <Button startIcon="local_grocery_store">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button startIcon="home" />'>
                        <Button startIcon="home">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button startIcon="settings" />'>
                        <Button startIcon="settings">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button startIcon="favorite" />'>
                        <Button startIcon="favorite">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button startIcon="delete" />'>
                        <Button startIcon="delete">Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button color="secondary" endIcon="local_grocery_store" />'>
                        <Button color="secondary" endIcon="local_grocery_store">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="secondary" endIcon="home" />'>
                        <Button color="secondary" endIcon="home">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="secondary" endIcon="settings" />'>
                        <Button color="secondary" endIcon="settings">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="secondary" endIcon="favorite" />'>
                        <Button color="secondary" endIcon="favorite">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="secondary" endIcon="delete" />'>
                        <Button color="secondary" endIcon="delete">Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button size="sm" />'>
                        <Button size="sm">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button size="md" />'>
                        <Button size="md">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button size="lg" />'>
                        <Button size="lg">Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox label='<Button color="default" />'>
                        <Button color="default">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="primary" />'>
                        <Button color="primary">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="secondary" />'>
                        <Button color="secondary">Default</Button>
                    </ButtonBox>
                    <ButtonBox label='<Button color="danger" />'>
                        <Button color="danger">Default</Button>
                    </ButtonBox>
                </Group>
                <Group>
                    <ButtonBox stateButton>
                        <Button color="default" isHovered>Default</Button>
                    </ButtonBox>
                    <ButtonBox>
                        <Button color="primary" isHovered>Default</Button>
                    </ButtonBox>
                    <ButtonBox>
                        <Button color="secondary" isHovered>Default</Button>
                    </ButtonBox>
                    <ButtonBox>
                        <Button color="danger" isHovered>Default</Button>
                    </ButtonBox>
                </Group>
            </ButtonsSection>
            <CustomButton />
        </Wrapper>
    )
}

const ButtonBox = ({ label, stateButton, children, ...rest }) => {
    return (
        <ButtonBoxComponent {...rest}>
            <Description $stateButton>{stateButton ? '&:hover, &:focus' : label}</Description>
            {children}
        </ButtonBoxComponent>
    )
}

export default Buttons