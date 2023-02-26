import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Link as MuiLink } from '@mui/material'
import { CustomAnchorMDX } from '../Layout/Layout'

type MDXpage = {
  frontmatter: {
    path: string
    title: string
    date: string
  }
  slug: string
}

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

const PageChildren = ({ location }: { location: any }) => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(ALL_MDX)
  const pagePath = location.path.replace('/', '')

  const pageChildren = nodes.filter((e: MDXpage) => {
    const predictSlug = e.slug.includes(pagePath)
    const predictDirectory = e.slug.at(-1) !== '/'

    return predictDirectory && predictSlug
  })

  const mapPagesToElements = pageChildren.map((page: MDXpage) => {
    return (
      <li>
        <CustomAnchorMDX href={page.slug.replace(pagePath, '')}>
          {page.frontmatter.title}
        </CustomAnchorMDX>
      </li>
    )
  })

  return <ol>{mapPagesToElements}</ol>
}

export default PageChildren
