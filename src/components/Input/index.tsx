import { InputHTMLAttributes, useState } from 'react'
import { IconBaseProps } from 'react-icons'

import * as S from './styles'

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    icon?: React.ComponentType<IconBaseProps>
    containerStyle?: object
    error?: string
}

export const Input: React.FC<inputProps> = ({name, icon: Icon, containerStyle={}, error=null, ...rest}) => {
    const [ isFocused, setIsFocused ] = useState(false)

    return (
        <S.Container 
            isFocused={isFocused}
            isErrored={!!error}
        >
            {Icon && <Icon size={20}/>}
            <input 
                type="text"
                onFocus={()=>{setIsFocused(true)}}
                onBlur={()=>{setIsFocused(false)}}
                {...rest}
            />
        </S.Container>
    )
}