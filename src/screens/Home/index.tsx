import Link from 'next/link'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import * as S from './styles'

export const Home = () => {
    return(
        <S.Container>
            <Header />
            <div>
                <img src="/logo.svg" alt="PerFit" />
                <h1>Connect you to health</h1>
                <S.ButtonsContainer>
                    <Button 
                        text="Buscar personal" 
                        color="#202020"
                        textColor="#FFF"
                    />
                    <Button 
                        text="Sou personal" 
                        color="#202020"
                        textColor="#FFF"
                    />
                </S.ButtonsContainer>
                <a>
                    <Link href="signIn">Já possui uma conta? Faça login</Link>
                </a>
            </div>
        </S.Container>
    )
}