import { useViewport } from '../../hooks/useViewport'
import { TableItem } from '../TableItem'
import * as S from './styles'

export const Table = () => {
    const { width } = useViewport()

    return width > 900 ? (
        <S.Container>
            <S.Header>
                <strong></strong>
                <strong>Domingo</strong>
                <strong>Segunda</strong>
                <strong>Terça</strong>
                <strong>Quarta</strong>
                <strong>Quinta</strong>
                <strong>Sexta</strong>
                <strong>Sábado</strong>
            </S.Header>
            <S.Body>
                <strong>7:00 - 7:45</strong> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/>
                <strong>8:00 - 8:45</strong> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable={false}/> <TableItem isAvailable={false}/> <TableItem isAvailable/>
                <strong>9:00 - 9:45</strong> <TableItem isAvailable/> <TableItem isAvailable={false}/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/>
                <strong>10:00 - 10:45</strong> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable={false}/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable={false}/>
                <strong>11:00 - 11:45</strong> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable={false}/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/> <TableItem isAvailable/>
            </S.Body>
        </S.Container>
    ) : (
        <S.Container>
            <S.Header>
                <strong>{width > 700 ? 'Domingo' : 'D'}</strong>
                <strong>{width > 700 ? 'Segunda' : 'S'}</strong>
                <strong>{width > 700 ? 'Terça' : 'T'}</strong>
                <strong>{width > 700 ? 'Quarta' : 'Q'}</strong>
                <strong>{width > 700 ? 'Quinta' : 'Q'}</strong>
                <strong>{width > 700 ? 'Sexta' : 'S'}</strong>
                <strong>{width > 700 ? 'Sábado' : 'S'}</strong>
            </S.Header>
            <S.Body>
            <strong>7:00 - 7:45</strong> <TableItem isAvailable/> 
                <strong>8:00 - 8:45</strong> <TableItem isAvailable/> 
                <strong>9:00 - 9:45</strong> <TableItem isAvailable/> 
                <strong>10:00 - 10:45</strong> <TableItem isAvailable/> 
                <strong>11:00 - 11:45</strong> <TableItem isAvailable/> 
            </S.Body>
        </S.Container>
    )
}