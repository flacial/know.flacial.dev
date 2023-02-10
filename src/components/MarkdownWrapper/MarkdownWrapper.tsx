import React, { FunctionComponent, PropsWithChildren } from 'react'
import styled from 'styled-components'

const MainStyled = styled.main`
  font-family: Inter;
  display: grid;
  justify-content: center;
  page-break-inside: avoid;
  max-width: 100%;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  padding-left: 30px;
`
const MinContainerStyled = styled.div`
  max-width: 780px;
`

const MarkdownWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainStyled>
      <MinContainerStyled>{children}</MinContainerStyled>
    </MainStyled>
  )
}

export default MarkdownWrapper
