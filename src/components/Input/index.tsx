import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import { FieldError } from 'react-hook-form'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    icon?: React.ComponentType<IconBaseProps>
    containerStyle?: object
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, icon: Icon, containerStyle={}, error=null, ...rest}, ref) => {
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
                ref={ref}
            />
            {error && 
                <S.Error title={error.message}>
                    <FiAlertCircle color="#c53030" size={20} />
                </S.Error>         
            }
        </S.Container>
    )
}

export const Input = forwardRef(InputBase)