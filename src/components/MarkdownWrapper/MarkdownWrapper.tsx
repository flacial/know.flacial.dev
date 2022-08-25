import React, { FunctionComponent, PropsWithChildren } from 'react'
import styled from 'styled-components'

const MainStyled = styled.main`
  font-family: Inter;
  display: grid;
  justify-content: center;
  color: hsl(0, 0%, 25.098039215686274%);
`
const MinContainerStyled = styled.div`
  max-width: 780px;
`

const MarkdownWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
      <MainStyled>
          <MinContainerStyled>
            {children}
          </MinContainerStyled>
    </MainStyled>
  )
}

export default MarkdownWrapper