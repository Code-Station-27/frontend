import * as S from './styles'

export const Table = () => {
    return(
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
                <strong>7:00 - 7:45</strong> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>
                <strong>8:00 - 8:45</strong> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>
                <strong>9:00 - 9:45</strong> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>
                <strong>10:00 - 10:45</strong> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>
                <strong>11:00 - 11:45</strong> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p>
            </S.Body>
        </S.Container>
    )
}