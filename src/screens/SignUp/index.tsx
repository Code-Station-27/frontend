import { useEffect, useState } from 'react'
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
import { Select } from '../../components/Select'
import { api } from '../../services/api'

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

const signupFormSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Senha obrigatória'),
    phone: Yup.string().required('Número de telefone obrigatório'),
    city: Yup.string().required('Cidade obrigatória'),
    street: Yup.string().required('Rua obrigatória'),
    district: Yup.string().required('Bairro obrigatório'),
    number: Yup.string().required('Número obrigatório'),
    type: Yup.string().required('Tipo de usuário obrigatório')
})

export const SignUp = () => {
    const [type, setType] = useState<'COMMON' | 'PERSONAL'>('COMMON')

    const [ufs, setUfs] = useState([])
    const [selectedUf, setSelectedUf] = useState('')

    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState('')

    const {
        handleSubmit,
        formState: { errors },
        control,
        setValue
      } = useForm({
        resolver: yupResolver(signupFormSchema)
      })

    const { signUp } = useAuth()

    const handleSignUp: SubmitHandler<SignupData> = async (values) => {
        console.log(values)
        await signUp(values)
    }

    const handleUserTypeChange = (user_type: 'COMMON' | 'PERSONAL') => {
        setType(user_type)
    }

    useEffect(()=>{
        console.log(errors)
    },[errors])

    useEffect(()=>{
        setValue('type', type)
    },[type])

    useEffect(()=>{
        api.get('/states').then((response)=>{
            setUfs(response.data.map(state => (
                {label: state.name, value: state.uf}
            )))
        })
    },[])

    useEffect(()=>{
        if(!selectedUf) return

        api.get(`/cities?state_uf=${selectedUf}`).then((response)=>{
            setCities(response.data.map(city => (
                {label: city.name, value: city.id}
            )))
        })
    },[selectedUf])

    useEffect(()=>{
        setValue('city', selectedCity)
    },[selectedCity])

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
                        control={control}
                        error={errors.name}
                    />
                    <Input 
                        name="email" 
                        placeholder="Digite seu email"
                        icon={FiMail}
                        control={control}
                        error={errors.email}
                    />
                    <Input 
                        name="phone" 
                        placeholder="Digite seu número (+55DD000000000)"
                        icon={FiPhone}
                        control={control}
                        error={errors.phone}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
                        control={control}
                        error={errors.password}
                    />
                    {/* <Input 
                        name="password-confirmation" 
                        type="password" 
                        placeholder="Confirme sua senha"
                        icon={FiLock}
                        control={control}
                        error={errors.password}
                    /> */}
                </div>
                <S.AddressTextContainer>
                    <h2>Endereço</h2>
                    <p>Ele só vai aparecer para quem você contratar.</p>
                </S.AddressTextContainer>
                <div>
                    <S.SelectContainer>
                        <Select 
                            placeholder="Estado" 
                            name="uf" 
                            options={ufs}
                            onChange={(e)=>{setSelectedUf(e.target.value)}}
                            value={selectedUf}
                            control={control}
                        />
                        <Select 
                            placeholder="Cidade" 
                            name="city" 
                            options={cities}
                            onChange={(e)=>{setSelectedCity(e.target.value)}}
                            value={selectedCity}
                            control={control}
                            error={errors.city}
                        />
                    </S.SelectContainer>
                    <Input 
                        name="district" 
                        placeholder="Digite seu bairro"
                        icon={FiMapPin}
                        control={control}
                        error={errors.district}
                    />
                    <Input 
                        name="street" 
                        placeholder="Digite sua rua"
                        icon={FiMapPin}
                        control={control}
                        error={errors.street}
                    />
                    <Input 
                        name="number" 
                        placeholder="Digite o número da sua casa"
                        icon={FiMapPin}
                        control={control}
                        error={errors.number}
                    />
                    {/* <Input 
                        name="complement" 
                        placeholder="Complemento"
                        icon={FiMapPin}
                        control={control}
                    /> */}
                </div>
                <S.TransactionTypeContainer>
                    <S.RadioBox
                        type="button"
                        onClick={() => handleUserTypeChange('COMMON')}
                        isActive={type === 'COMMON'}
                        activeColor="green"
                    >
                        <span>Sou cliente</span> 
                    </S.RadioBox>

                    <S.RadioBox
                        type="button"
                        onClick={() => handleUserTypeChange('PERSONAL')}
                        isActive={type === 'PERSONAL'}
                        activeColor="red"
                    >
                       <span>Sou prestador</span>
                    </S.RadioBox>
                </S.TransactionTypeContainer>
                <Button 
                    type="submit"
                    text="Cadastrar" 
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