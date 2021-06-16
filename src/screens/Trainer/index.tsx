import * as S from './styles'

import { Table } from '../../components/Table'
import { Header } from '../../components/Header'

export const Trainer = () => {
    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.UserInfo>
                    <header>
                        <div/>
                        <h1>Nome</h1>
                    </header>
                    <div>
                        <p>Preço: R$100,00</p>
                        <p>Número: 11 000000000</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptatibus quo molestiae modi vel quis illum sed eius at minus exercitationem, aperiam sequi quos iste voluptate totam praesentium maxime eligendi.
                    </div>
                </S.UserInfo>
                <Table/>
            </S.Content>
            
        </S.Container>
    )
}