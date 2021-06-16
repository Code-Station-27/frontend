import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "aside content";

  background-color: #F5F5F9;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const ContentSearch = styled.div`
  width: 100%;
  padding: 10px 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  span { 
    font-size: 22px;
    font-weight: bold;
    width: 100%;
  }
`

export const ContentPersonals = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`

export const Aside = styled.aside`
  width: 300px;
  
  grid-area: aside;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.primary};

  > span { 
    margin: 20px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`

