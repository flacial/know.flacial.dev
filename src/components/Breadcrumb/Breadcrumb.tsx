import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'

const INACTIVE_PAGES = ['knowledge', 'tech']

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

    const currentPage = value.at(-1) || ''

    return (
      <Tooltip title="Not available yet">
        <div
          {...(INACTIVE_PAGES.includes(currentPage) && {
            style: { cursor: 'not-allowed' },
          })}
        >
          <Link
            {...(INACTIVE_PAGES.includes(currentPage) && {
              style: { pointerEvents: 'none' },
            })}
            underline="hover"
            key={i + 1}
            color="text.secondary"
            href={value.join('/')}
          >
            {e}
          </Link>
        </div>
      </Tooltip>
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
