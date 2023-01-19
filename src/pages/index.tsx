import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import MarkdownWrapper from '../components/MarkdownWrapper'

const HeadingStyled = styled.h1`
  border-bottom: 3px solid;
  padding-bottom: 10px;
  color: dodgerblue;
`

const AnchorMDX = styled.a`
  color: #527dc9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const ListStyled = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  row-gap: 10px;
`

const ALL_MDX = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date
          path
          title
        }
        slug
      }
    }
  }
`

type MDXpage = {
  frontmatter: {
    path: string
    title: string
    date: string
  }
  slug: string
}

const IndexPage = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(ALL_MDX)

  const mapPagesToElements = nodes.map((page: MDXpage) => {
    return (
      <Link to={page.slug}>
        <AnchorMDX>{page.frontmatter.title}</AnchorMDX>
      </Link>
    )
  })

  return (
    <MarkdownWrapper>
      <HeadingStyled>Available pages</HeadingStyled>
      <ListStyled>{mapPagesToElements}</ListStyled>
    </MarkdownWrapper>
  )
}

export default IndexPage
