import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import MarkdownWrapper from '../components/MarkdownWrapper'
import Layout from '../components/Layout'
import { Typography, Link as MuiLink } from '@mui/material'

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
        <MuiLink
          style={{
            color: '#e7a63c',
            textDecorationColor: '#b37f2c',
          }}
        >
          {page.frontmatter.title}
        </MuiLink>
      </Link>
    )
  })

  return (
    <>
      <Layout title="Knowledge Home">
        <MarkdownWrapper>
          <Typography variant="h4">Available pages</Typography>
          <ListStyled>{mapPagesToElements}</ListStyled>
        </MarkdownWrapper>
      </Layout>
    </>
  )
}

export default IndexPage
