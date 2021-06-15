import * as S from './styles';

interface ButtonProps {
  text: string,
  color?: string
  textColor?: string
}

export const Button: React.FC<ButtonProps> = ({ text, color, textColor }) => {
  return (
    <>
      <S.Container color={color} textColor={textColor}>
        {text}
      </S.Container>
    </>
  )
}