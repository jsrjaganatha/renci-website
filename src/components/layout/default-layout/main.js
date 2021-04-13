import styled from 'styled-components'

export const Main = styled.main(({ theme }) => `
  flex: 1;
  width: 100%;
  background-color: ${ theme.color.white };
  overflow-x: hidden;
`)