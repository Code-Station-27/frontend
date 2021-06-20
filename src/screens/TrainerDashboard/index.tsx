import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import { TrainerTable } from '../../components/TrainerTable'
import { useAuth } from '../../contexts/AuthContext'

import * as S from './styles'

export const TrainerDashboard = () => {
    const { user } = useAuth()

    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.Heading>Próximo treino: </S.Heading>
                <S.NextTraining>
                    <img src="" alt="" />
                    <div>
                        <strong>Amanhã - 08:00</strong>
                        <p>Filipe Pfluck - Bairro, rua, número</p>
                    </div>
                </S.NextTraining>

                <S.Heading>Sua agenda de treinos: </S.Heading>
                <TrainerTable/>
            </S.Content>
        </S.Container>
    )
}