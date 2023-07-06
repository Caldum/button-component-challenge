import { useState } from "react"

export const useCustomButton = () => {
    const [variant, setVariant] = useState('default')
    const [disabledShadow, setDisabledShadow] = useState('no')
    const [disabledButton, setDisabledButton] = useState('no')
    const [size, setSize] = useState('md')
    const [color, setColor] = useState('primary')
    const [hasIcon, setHasIcon] = useState('no')
    const [icon, setIcon] = useState('local_grocery_store')

    const handleSelection = data => {
        const { name, value } = data;
        if (name === 'variant')
            return setVariant(value)
        if (name === 'disabledShadow')
            return setDisabledShadow(value)
        if (name === 'disabledButton')
            return setDisabledButton(value)
        if (name === 'size')
            return setSize(value)
        if (name === 'color')
            return setColor(value)
        if (name === 'hasIcon')
            return setHasIcon(value)
        if (name === 'icon')
            return setIcon(value)
    }

    return {
        variant,
        disabledShadow,
        disabledButton,
        size,
        color,
        hasIcon,
        icon,
        handleSelection
    }
}