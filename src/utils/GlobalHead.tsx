import React, { PropsWithChildren } from 'react'

export const GlobalHead: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({ title, children }) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  )
}
