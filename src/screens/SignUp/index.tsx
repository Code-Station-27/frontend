import Link from 'next/link'

import { FiUser, FiLock, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from '../../contexts/AuthContext'

import * as S from './styles'

import { LandingBackground } from '../../components/LandingBackground'
import { LogoAndSlogan } from '../../components/LogoAndSlogan'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useCallback } from 'react'

interface SignupData {
    name: string
    email: string,
    password: string,
    phone: string,
    city: string,
    street: string,
    number: string,
    district: string,
    type: 'COMMON' | 'PERSONAL'
  }

export const SignUp = () => {
    const signupFormSchema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: Yup.string().required('Senha obrigatória'),
        phone: Yup.string().required('Número de telefone obrigatório'),
        city: Yup.string().required('Cidade obrigatória'),
        street: Yup.string().required('Rua obrigatória'),
        district: Yup.string().required('Bairro obrigatório'),
        number: Yup.string().required('Número obrigatório'),
    })

    const { 
        register, 
        handleSubmit, 
        formState, 
        formState: { errors } 
    } = useForm<SignupData>({
        resolver: yupResolver(signupFormSchema)
    })

    const { signUp } = useAuth()

    const handleSignUp: SubmitHandler<SignupData> = (values) => {
        signUp(values)
    }

    return(
        <LandingBackground>
            <S.Container>
            <LogoAndSlogan/>
            <S.Form onSubmit={handleSubmit(handleSignUp)}>
                <div>
                    <Input 
                        name="name" 
                        placeholder="Digite seu nome"
                        icon={FiUser}
                        {...register("name")}
                        error={errors.name}
                    />
                    <Input 
                        name="email" 
                        placeholder="Digite seu email"
                        icon={FiMail}
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input 
                        name="phone" 
                        placeholder="Digite seu número"
                        icon={FiPhone}
                        {...register("phone")}
                        error={errors.phone}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
                        {...register("password")}
                        error={errors.password}
                    />
                    <Input 
                        name="password-confirmation" 
                        type="password" 
                        placeholder="Confirme sua senha"
                        icon={FiLock}
                    />
                </div>
                <S.AddressTextContainer>
                    <h2>Endereço</h2>
                    <p>Ele só vai aparecer para quem você contratar.</p>
                </S.AddressTextContainer>
                <div>
                    <Input 
                        name="city" 
                        placeholder="Digite sua cidade"
                        icon={FiMapPin}
                        {...register("city")}
                        error={errors.city}
                    />
                    <Input 
                        name="neighborhood" 
                        placeholder="Digite seu bairro"
                        icon={FiMapPin}
                        {...register("district")}
                        error={errors.district}
                    />
                    <Input 
                        name="street" 
                        placeholder="Digite sua rua"
                        icon={FiMapPin}
                        {...register("street")}
                        error={errors.street}
                    />
                    <Input 
                        name="number" 
                        placeholder="Digite o número da sua casa"
                        icon={FiMapPin}
                        {...register("number")}
                        error={errors.number}
                    />
                    <Input 
                        name="complement" 
                        placeholder="Complemento"
                        icon={FiMapPin}
                    />
                </div>
                <Button 
                    type="submit"
                    text="Entrar" 
                    color="#202020" 
                    textColor="#FFF"
                />
            </S.Form>
            <Link href="signIn">
                <S.StyledLink>Já possui conta? Entrar</S.StyledLink>
            </Link>
            </S.Container>
        </LandingBackground>
    )
}