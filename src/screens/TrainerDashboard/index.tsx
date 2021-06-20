import { Header } from '../../components/Header'
import { TrainerTable } from '../../components/TrainerTable'
import { useAuth } from '../../contexts/AuthContext'

import * as S from './styles'

const days = [
    {
      hours: [
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
      ],
    },
    {
      hours: [
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
      ],
    },
    {
      hours: [
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
      ],
    },
    {
      hours: [
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
      ],
    },
    {
      hours: [
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
      ],
    },
    {
      hours: [
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
      ],
    },
    {
      hours: [
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        null,
        null,
        null,
        null,
        null,
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
        { name: 'Filipe Pfluck', address: 'Bairro, rua, número' },
      ],
    },
  ];


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
                <TrainerTable days={days}/>
            </S.Content>
        </S.Container>
    )
}