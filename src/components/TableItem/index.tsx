import * as S from './styles'

interface TableItemProps{
    isAvailable: boolean
}

export const TableItem: React.FC<TableItemProps> = ({isAvailable}) => {
    return(
        <S.Container isAvailable={isAvailable}>
            {isAvailable ? 'Disponível' : 'Ocupado'}
        </S.Container>
    )
}