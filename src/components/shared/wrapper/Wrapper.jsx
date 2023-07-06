import { WrapperComponent } from './WrapperStyles'
export { Title } from './WrapperStyles'

const Wrapper = ({ children, ...rest }) => {
    return (
        <WrapperComponent {...rest}>
            {children}
        </WrapperComponent>
    )
}

export default Wrapper