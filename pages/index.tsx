import styled from 'styled-components'
import { SubmitButton } from '../src/components/SubmitButton'
import { Input } from '../src/components/Input'
import { FiUser } from 'react-icons/fi'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <SubmitButton text="Cadastrar"  />
      <Input name="usuário" icon={FiUser}/>
     </>
  )
}
