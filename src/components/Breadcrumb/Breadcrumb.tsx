import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Breadcrumb = ({ location }: { location?: string }) => {
  const Home = (
    <Link underline="hover" key={0} color="text.secondary" href="/">
      Home
    </Link>
  )

  const mapPathToLink = (e: string, i: number, arr: string[]) => {
    const locationArr = (location || '').split('/')
    const index = locationArr.indexOf(e)
    const value = locationArr.filter((_, i) => i <= index)

    if (i === arr.length - 1) {
      return (
        <Typography key={i + 1} color="text.primary">
          {e}
        </Typography>
      )
    }

    return (
      <Link
        underline="hover"
        key={i + 1}
        color="text.secondary"
        href={value.join('/')}
      >
        {e}
      </Link>
    )
  }

  const breadcrumbs =
    location &&
    new Array().concat(
      [Home],
      location
        .split('/')
        .filter((e) => e !== '')
        .map(mapPathToLink)
    )

  return location ? <Breadcrumbs>{breadcrumbs}</Breadcrumbs> : <></>
}

export default Breadcrumb
