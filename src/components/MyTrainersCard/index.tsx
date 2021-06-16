import Image from 'next/image'

import { FiXCircle } from 'react-icons/fi'
import { useTheme } from 'styled-components';

import * as S from "./styles";

interface PersonalCardProps {
  name: string;
  description: string;
  rating: number;
}

export const MyTrainersCard = ({
  name,
  description,
  rating,
}: PersonalCardProps) => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <S.Header>
        <Image src="/images/fake_avatar.jpg" alt="Fake avatar PersonalCard" width="60" height="60" />
        <S.Name>{name}</S.Name>
      </S.Header>
      <S.ContentInfos>
        <S.MyTrainerLesson>
          <div>
            <strong>Quarta feira</strong>
            <p>10:00 - 10:45</p>
          </div>
          <FiXCircle size={24} color={colors.red}/>
        </S.MyTrainerLesson>
        <S.MyTrainerLesson>
          <div>
            <strong>Quinta feira</strong>
            <p>10:00 - 10:45</p>
          </div>
          <FiXCircle size={24} color={colors.red}/>
        </S.MyTrainerLesson>
      </S.ContentInfos>
    </S.Container>
  );
};
