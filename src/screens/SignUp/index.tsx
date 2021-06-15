import Link from 'next/link'

import { FiUser, FiLock, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

import * as S from './styles'

import { LandingBackground } from '../../components/LandingBackground'
import { LogoAndSlogan } from '../../components/LogoAndSlogan'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export const SignUp = () => {
    

    return(
        <LandingBackground>
            <S.Container>
            <LogoAndSlogan/>
            <S.Form>
                <div>
                    <Input 
                        name="name" 
                        placeholder="Digite seu nome"
                        icon={FiUser}
                    />
                    <Input 
                        name="email" 
                        placeholder="Digite seu email"
                        icon={FiMail}
                    />
                    <Input 
                        name="phone" 
                        placeholder="Digite seu número"
                        icon={FiPhone}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
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
                    />
                    <Input 
                        name="neighborhood" 
                        placeholder="Digite seu bairro"
                        icon={FiMapPin}
                    />
                    <Input 
                        name="street" 
                        placeholder="Digite sua rua"
                        icon={FiMapPin}
                    />
                    <Input 
                        name="number" 
                        placeholder="Digite o número da sua casa"
                        icon={FiMapPin}
                    />
                    <Input 
                        name="complement" 
                        placeholder="Complemento"
                        icon={FiMapPin}
                    />
                </div>
                <Button 
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