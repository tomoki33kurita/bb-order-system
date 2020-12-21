import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, FormControl, RadioGroup, Radio, Fab } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ColorBox from 'src/components/atoms/ColorBox'

type Props = {
  summary: string
  selectedLabel?: string
  defaultValue: string
  objects: {
    label: string
    value: string
    color?: string
  }[]
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AccordionRadio: React.FC<Props> = ({ summary, selectedLabel, defaultValue, objects, handleChange }) => (
  <Accordion style={{ marginBottom: '8px' }}>
    <AccordionSummary
      expandIcon={
        <Fab size="small" tabIndex={-1} style={{ boxShadow: 'unset' }}>
          <ExpandMoreIcon />
        </Fab>
      }
    >
      <Box display="flex">
        <Box fontSize={14}>{summary}</Box>
        <Box component="span" display="inherit" color={'#aaa'} fontSize={12} alignItems="center" ml={2}>
          {selectedLabel}
        </Box>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <FormControl>
        <RadioGroup defaultValue={defaultValue} onChange={handleChange}>
          {objects.map((obj) => (
            <FormControlLabel
              key={obj.value}
              value={obj.value}
              control={<Radio />}
              label={
                obj.color ? (
                  <>
                    <ColorBox bgcolor={obj.color} />
                    {obj.label}
                  </>
                ) : (
                  <>{obj.label}</>
                )
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </AccordionDetails>
  </Accordion>
)
export default AccordionRadio
