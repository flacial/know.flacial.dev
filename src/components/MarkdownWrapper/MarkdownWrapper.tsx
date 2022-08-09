import React, { FunctionComponent, PropsWithChildren } from 'react'
import styled from 'styled-components'

const MainStyled = styled.main`
  font-family: Inter;
  display: grid;
  justify-content: center;
`
const MinContainerStyled = styled.div`
  max-width: 600px;
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