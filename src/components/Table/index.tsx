import { useState } from 'react'
import { useViewport } from '../../hooks/useViewport'
import { TableItem } from '../TableItem'
import * as S from './styles'

interface Hour {
    isAvailable: boolean
}

interface Day {
    hours: (Hour | null)[]
}

interface TableProps {
    days: Day[]
    onItemClick: ({weekday, hour})=>void
}

export const Table: React.FC<TableProps> = ({days, onItemClick}) => {
    const { width } = useViewport()

    const [selectedDay, setSelectedDay] = useState(0)

    const weekdays = [
        {
            longName: 'Domingo',
            shortName: 'D'
        },
        {
            longName: 'Segunda',
            shortName: 'S'
        },
        {
            longName: 'Terça',
            shortName: 'T'
        },
        {
            longName: 'Quarta',
            shortName: 'Q'
        },
        {
            longName: 'Quinta',
            shortName: 'Q'
        },
        {
            longName: 'Sexta',
            shortName: 'S'
        },
        {
            longName: 'Sábado',
            shortName: 'S'
        }
    ]

    const hours = [
        '7:00-7:45',
        '8:00-8:45',
        '9:00-9:45',
        '10:00-10:45',
        '11:00-11:45',
        '12:00-12:45',
        '13:00-13:45',
        '14:00-14:45',
        '15:00-15:45',
        '16:00-16:45',
        '17:00-17:45',
        '18:00-18:45',

    ]

    const handleItemClick = (isAvailable: boolean, weekday: string, hour: string) => {
        if(isAvailable) onItemClick({weekday, hour})
    }

    return width > 900 ? (
        <S.Container>
            <S.Header>
                <strong></strong>
                {weekdays.map(day => (
                    <strong key={day.longName}>{day.longName}</strong>
                ))}
            </S.Header>
            <S.Body>
                {hours.map((hour,hourindex) => (
                    <>
                    <strong key={hour}>{hour}</strong>
                    {days.map((day, dayIndex) => {
                        const isAvailable = day.hours[hourindex] 
                            ? day.hours[hourindex].isAvailable
                            : false

                        return (
                            day.hours[hourindex]
                                ? <TableItem 
                                    onClick={()=>handleItemClick(
                                        isAvailable, 
                                        weekdays[dayIndex].longName, 
                                        hours[hourindex]
                                    )} 
                                    isAvailable={isAvailable}
                                />: <div/>
                        )
                    })}
                    </>
                ))}
            </S.Body>
        </S.Container>
    ) : (
        <S.Container>
            <S.Header>
                {weekdays.map((day,index) => (
                    <S.SelectableDay 
                        key={day.longName}
                        isSelected={selectedDay === index} 
                        isSmall={width < 700}
                        onClick={()=>setSelectedDay(index)}
                    >
                        <strong>{width > 700 ? day.longName : day.shortName}</strong>
                    </S.SelectableDay>
                ))}
                
            </S.Header>
            <S.Body>
                {hours.map((hour,hourindex) => (
                    <>
                    <strong key={hour}>{hour}</strong>
                    {   
                        days[selectedDay].hours[hourindex]
                            ? <TableItem 
                                onClick={()=>handleItemClick(
                                    days[selectedDay].hours[hourindex].isAvailable,
                                    weekdays[selectedDay].longName, 
                                    hours[hourindex]
                                )} 
                                isAvailable={days[selectedDay].hours[hourindex].isAvailable}
                            /> : <div/>
                    }
                    </>
                ))}
            </S.Body>
        </S.Container>
    )
}