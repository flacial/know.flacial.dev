import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { IconProps } from '@mui/material'

type Props = {
  content: string
  iconColor?: IconProps['color']
  summaryColor?: string
  summaryText: string
}

const AccordionComponent: React.FC<React.PropsWithChildren & Props> = ({
  children,
  iconColor,
  summaryColor,
  summaryText,
}) => {
  return (
    <Accordion
      sx={{
        backgroundColor: '#011627',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={iconColor || 'info'} />}
        aria-controls="scaling-content"
        id="scaling-header"
      >
        <Typography color={summaryColor}>{summaryText}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#012039' }}>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionComponent
