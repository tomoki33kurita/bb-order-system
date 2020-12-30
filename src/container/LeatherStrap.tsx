import React from 'react'
import { leatherStrap } from 'src/container/canvasFunctions/leatherStrap'

type Props = {
  color: string
}

const LeatherStrap: React.FC<Props> = ({ color }) => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    leatherStrap(ctx, color)
  }, [color])

  return <canvas width="1120" height="620" id="leatherStrap"></canvas>
}

export default LeatherStrap
