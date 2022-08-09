import React, { PropsWithChildren } from 'react'
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components'
import vsLight from 'prism-react-renderer/themes/nightOwlLight';

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
  color: #6395eb;
  padding: 3px 8px;
  border: 0;
  background: hsl(0deg 0% 98%);
  border-radius: 4px;
`
const AnchorMDX = styled.a`
  color: #527dc9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

import Highlight, { defaultProps } from 'prism-react-renderer';

const component = {
  pre: (props: any) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        theme={vsLight}
        code={props.children.props.children}
        language={
          matches?.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <PreStyled className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </PreStyled>
        )}
      </Highlight>
    );
  },
};

const PreMDX = (props: any) => <PreStyled {...props} />
const CodeMDX = (props: any) => {console.log(props); return <CodeStyled {...props} />}

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        pre: component.pre,
        code: CodeMDX,
        inlineCode: InlineCodeMDX,
        a: AnchorMDX
      }}
    >
      {children}
    </MDXProvider>
  )
}

export default Layout