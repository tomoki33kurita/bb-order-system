import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, FormControl, RadioGroup, Radio } from '@material-ui/core'

type Props = {
  summary: string
  defaultValue: string
  objects: {
    label: string
    value: string
  }[]
}

const AccordionRadio: React.FC<Props> = ({ summary, defaultValue, objects }) => (
  <Accordion style={{ marginBottom: '8px' }}>
    <AccordionSummary>{summary}</AccordionSummary>
    <AccordionDetails>
      <FormControl>
        <RadioGroup defaultValue={defaultValue}>
          {objects.map((obj) => (
            <FormControlLabel key={obj.value} value={obj.value} control={<Radio />} label={obj.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </AccordionDetails>
  </Accordion>
)
export default AccordionRadio
