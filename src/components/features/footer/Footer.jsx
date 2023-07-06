import { FooterComponent, IconsSource, CreatedBy, Link, HighlightLink } from "./FooterStyles"

const Footer = () => {
    return (
        <FooterComponent>
            <IconsSource>
                Icons:
                <Link href='https://material.io/resources/icons/?style=round' target="blank">
                    https://material.io/resources/icons/?style=round
                </Link>
            </IconsSource>
            <CreatedBy>
                Created by <HighlightLink href='https://github.com/Caldum' target="blank">
                    Caldum
                </HighlightLink> - <Link href='https://devchallenges.io/' target="blank">
                    devChallenges.io
                </Link>
            </CreatedBy>
        </FooterComponent>
    )
}

export default Footer