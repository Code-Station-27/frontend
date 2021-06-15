import Link from 'next/link'

import { FiUser, FiLock } from 'react-icons/fi'

import * as S from './styles'

import { LandingBackground } from '../../components/LandingBackground'
import { LogoAndSlogan } from '../../components/LogoAndSlogan'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export const SignIn = () => {
    return(
        <LandingBackground>
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
                </div>
                <Button 
                    text="Entrar" 
                    color="#202020" 
                    textColor="#FFF"
                />
            </S.Form>
            <Link href="signUp">
                <S.StyledLink>Não possui uma conta? Cadastrar</S.StyledLink>
            </Link>
        </LandingBackground>
    )
}