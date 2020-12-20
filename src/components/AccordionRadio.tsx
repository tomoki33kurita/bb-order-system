import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, FormControl, RadioGroup, Radio } from '@material-ui/core'

type Props = {
  summary: string
  selectedLabel?: string
  defaultValue: string
  objects: {
    label: string
    value: string
  }[]
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AccordionRadio: React.FC<Props> = ({ summary, selectedLabel, defaultValue, objects, handleChange }) => (
  <Accordion style={{ marginBottom: '8px' }}>
    <AccordionSummary>
      <Box display="flex">
        <Box>{summary}</Box>
        <Box component="span" display="inherit" color={'#aaa'} fontSize={12} alignItems="center" ml={2}>
          {selectedLabel}
        </Box>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <FormControl>
        <RadioGroup defaultValue={defaultValue} onChange={handleChange}>
          {objects.map((obj) => (
            <FormControlLabel key={obj.value} value={obj.value} control={<Radio />} label={obj.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </AccordionDetails>
  </Accordion>
)
export default AccordionRadio
