import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 60px;

  padding: 16px;
  background: ${({ theme }) => theme.colors.button_green};
  border: 0;
  border-radius: 8px;

  font-size: 22px;
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
  }
`