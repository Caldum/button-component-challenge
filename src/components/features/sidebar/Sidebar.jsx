import { Container, TextLogo, PrimaryText, SecondaryText, Navbar, MenuItem } from "./SidebarStyles"

const Sidebar = () => {
    return (
        <Container>
            <TextLogo>
                <PrimaryText>Dev</PrimaryText>
                <SecondaryText>challenges.io</SecondaryText>
            </TextLogo>
            <Navbar>
                <MenuItem>Colors</MenuItem>
                <MenuItem>Typography</MenuItem>
                <MenuItem>Spaces</MenuItem>
                <MenuItem selected={true}>Buttons</MenuItem>
                <MenuItem>Inputs</MenuItem>
                <MenuItem>Grid</MenuItem>
            </Navbar>
        </Container>
    )
}

export default Sidebar