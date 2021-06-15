import Link from 'next/link'

import { Button } from '../../components/Button'
import { LandingBackground } from '../../components/LandingBackground'
import { LogoAndSlogan } from '../../components/LogoAndSlogan'

import * as S from './styles'

export const Home = () => {
    return(
        <LandingBackground>
            <LogoAndSlogan/>
            <S.ButtonsContainer>
                <Button 
                    text="Buscar trainer" 
                    color="#202020"
                    textColor="#FFF"
                />
                <Button 
                    text="Sou trainer" 
                    color="#202020"
                    textColor="#FFF"
                />
            </S.ButtonsContainer>
            <Link href="signIn">
                <S.StyledLink>Já possui uma conta? Faça login</S.StyledLink>
            </Link>
        </LandingBackground>
    )
}