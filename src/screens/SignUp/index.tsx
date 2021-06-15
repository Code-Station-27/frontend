import Link from 'next/link'

import { FiUser, FiLock } from 'react-icons/fi'

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
                        name="email" 
                        placeholder="Digite seu email"
                        icon={FiUser}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
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