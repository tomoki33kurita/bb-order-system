export const listBelt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 一番小指寄りの部分
  ctx.moveTo(309, 557)
  ctx.lineTo(312, 581)
  ctx.lineTo(323, 592)
  ctx.lineTo(320, 562)
  ctx.lineTo(309, 557)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 左から２番目
  ctx.moveTo(331, 562)
  ctx.lineTo(337, 595)
  ctx.lineTo(365, 593)
  ctx.lineTo(361, 558)
  ctx.lineTo(331, 562)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // パッキンの左側
  ctx.moveTo(381, 558)
  ctx.lineTo(385, 596)
  ctx.lineTo(411, 593)
  ctx.lineTo(411, 562)
  ctx.lineTo(381, 558)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // パッキンの右
  ctx.moveTo(455, 563)
  ctx.lineTo(462, 583)
  ctx.lineTo(454, 598)
  ctx.lineTo(487, 602)
  ctx.lineTo(513, 586)
  ctx.lineTo(513, 586)
  ctx.lineTo(494, 567)
  ctx.lineTo(454, 562)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // パッキンの右の下革
  ctx.moveTo(498, 569)
  ctx.lineTo(516, 586)
  ctx.lineTo(494, 601)
  ctx.lineTo(528, 586)
  ctx.lineTo(551, 547)
  ctx.lineTo(524, 562)
  ctx.lineTo(498, 569)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // パッキンの中
  ctx.fillStyle = color
  ctx.moveTo(420, 563)
  ctx.lineTo(420, 592)
  ctx.lineTo(444, 594)
  ctx.lineTo(444, 565)
  ctx.lineTo(417, 563)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
