import React, { PropsWithChildren, ReactElement } from 'react'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'
import vsLight from 'prism-react-renderer/themes/nightOwl'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { GlobalHead } from '../../utils/GlobalHead'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { ThemeProvider, createTheme } from '@mui/material'
import './layout.css'

const H1Styled = styled.h1`
  border-bottom: 3px solid;
  padding-bottom: 10px;
  color: #d3d3d3;
`

const PreStyled = styled.pre`
  background: hsl(0deg 0% 98%);
  border-left: 3px solid cornflowerblue;
  color: hsl(0deg 0% 40%);
  page-break-inside: avoid;
  font-family: 'fira code';
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
  white-space: pre-wrap;
`
const CodeStyled = styled.code`
  font-family: 'fira code';
`

const InlineCodeMDX = styled.code`
  font-family: 'fira code';
  font-size: 12px;
  color: #bdc6cf;
  padding: 3px 8px;
  border: 0;
  background-color: #282c34;
  border-radius: 4px;
  margin-inline: 2px;
  font-weight: bold;
`
const AnchorMDX = styled.a`
  color: #527dc9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const component = {
  pre: (props: ReactElement['props']) => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        theme={vsLight}
        code={props.children.props.children}
        language={matches?.groups?.lang ? matches.groups.lang : ''}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <PreStyled className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) =>
                  // If the last line is empty, don't render anything
                  i === tokens.length - 1 ? (
                    token.content.trim().length ? (
                      <span {...getTokenProps({ token, key })} />
                    ) : (
                      <></>
                    )
                  ) : (
                    <span {...getTokenProps({ token, key })} />
                  )
                )}
              </div>
            ))}
          </PreStyled>
        )}
      </Highlight>
    )
  },
}

const CodeMDX = (props: ReactElement['props']) => <CodeStyled {...props} />

const CustomAnchorMDX = (props: ReactElement['props']) => {
  const isLocalAnchor = props?.className?.includes('anchor')

  return <AnchorMDX {...props} target={isLocalAnchor ? '_self' : '_blank'} />
}

const LayoutContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 100px 50px;
`

const BreadCrumbContainer = styled.div`
  padding-left: 30px;
`

const theme = createTheme({
  typography: {
    fontFamily: ['-apple-system', 'Inter', 'Roboto'].join(','),
  },
  palette: {
    text: {
      primary: '#d3d3d3',
      secondary: '#afafaf',
    },
  },
})

const Layout: React.FC<
  PropsWithChildren<{ title: string; location?: any }>
> = ({ children, title, location }) => {
  return (
    <LayoutContainer>
      <GlobalHead title={title}>
        <ThemeProvider theme={theme}>
          <BreadCrumbContainer>
            <Breadcrumb location={location} />
          </BreadCrumbContainer>
          <MDXProvider
            components={{
              pre: component.pre,
              code: CodeMDX,
              inlineCode: InlineCodeMDX,
              a: CustomAnchorMDX,
              h1: H1Styled,
            }}
          >
            {children}
          </MDXProvider>
        </ThemeProvider>
      </GlobalHead>
    </LayoutContainer>
  )
}

export default Layout
