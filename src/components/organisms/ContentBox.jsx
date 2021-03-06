/* eslint-disable react/prop-types */
import React from 'react'
import styled, { css } from 'styled-components'

import { TextBox } from './TextBox.jsx'
import { GigsBox } from './GigsBox.jsx'
import { MediaBox } from './MediaBox.jsx'

import { MediaSmall, MediaMobile, NotMediaMobile } from '../../style/media.js'

import { renderHtml } from '../../utils/renderHtml.js'

const DesktopGrid = {
  RowSize: 6,
  ColumnSize: 6,
  Unit: 16.666, // = 100 : 6
}

const MobileGrid = {
  RowSize: 3,
  ColumnSize: 2,
  RowUnit: 33.333,
  ColumnUnit: 50,
}

const LinkMargin = {
  L: 9,
  M: 7,
  S: 5,
}

const round = a => a.toFixed(2)

const getGridArea = (
  { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan },
  linksPosition,
  linksSize = 'M'
) => {
  const { ColumnSize, RowSize, Unit } = DesktopGrid
  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = ColumnSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  const isBottom =
    RowSize - endRow < startRow - 1 ||
    (endRow === RowSize && ['BOTTOM_CENTER', 'BOTTOM_LEFT', 'BOTTOM_RIGHT'].includes(linksPosition))
  const positionV = isBottom ? 'bottom' : 'top'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : ColumnSize - endColumn
  const marginH = (marginHUnit * Unit).toFixed(3)

  const marginVUnit = isBottom ? RowSize - endRow : startRow - 1
  const marginV = (marginVUnit * Unit).toFixed(3)

  let marginVLinks = 0
  let marginHLinks = 0

  const linkMargin = LinkMargin[linksSize]

  // Give extra margin if links are at same side as content
  switch (linksPosition) {
    case 'BOTTOM_CENTER':
    case 'BOTTOM_LEFT':
    case 'BOTTOM_RIGHT':
      if (isBottom && endRow === RowSize) marginVLinks += linkMargin
      break
    case 'CENTER_RIGHT':
      if (!isLeft && endColumn === ColumnSize) marginHLinks += linkMargin
      break
    case 'CENTER_LEFT':
      if (isLeft && startColumn === 1) marginHLinks += linkMargin
      break
    default:
    // Do nothing
  }

  const width = round(columnSpan * Unit)
  const widthCorrection = round((columnSpan * (marginHLinks + 2)) / ColumnSize)

  const height = round(rowSpan * Unit)
  const heightCorrection = round((rowSpan * (marginVLinks + 2)) / RowSize)

  const area = `
    ${positionH}: calc(${marginH}vw + ${marginHLinks + 1}rem);
    ${positionV}: calc(${marginV}vh + ${marginVLinks + 1}rem);
    width: calc(${width}vw - ${widthCorrection}rem);
    height: calc(${height}vh - ${heightCorrection}rem);
  `

  return css`
    ${area}
  `
}

const getGridAreaMobile = (
  { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan },
  linksSize = 'M'
) => {
  const { ColumnSize, ColumnUnit, RowSize, RowUnit } = MobileGrid

  // Decide if margin is calculated from top or bottom and left or right
  const isLeft = ColumnSize - endColumn >= startColumn - 1
  const positionH = isLeft ? 'left' : 'right'

  const positionV = 'bottom'

  // Calculate vertical and horizontal margins and width
  const marginHUnit = isLeft ? startColumn - 1 : ColumnSize - endColumn
  const marginH = (marginHUnit * ColumnUnit).toFixed(3)

  const marginVUnit = RowSize - endRow
  const marginV = (marginVUnit * RowUnit).toFixed(3)

  let marginVLinks = 0
  let marginHLinks = 0

  const linkMargin = LinkMargin[linksSize]

  // Give extra margin if links are at same side as content
  if (endRow === RowSize) marginVLinks += linkMargin

  const width = round(columnSpan * ColumnUnit)
  const widthCorrection = round((columnSpan * (marginHLinks + 2)) / ColumnSize)

  const height = round(rowSpan * RowUnit)
  const heightCorrection = round((rowSpan * (marginVLinks + 2)) / RowSize)

  const area = `
    ${positionH}: calc(${marginH}vw + 1rem);
    ${positionV}: calc(${marginV}vh + ${linkMargin + 1}rem);
    width: calc(${width}vw - ${(columnSpan * 2) / ColumnSize}rem);
    height: calc(${height}vh - ${(rowSpan * (linkMargin + 2)) / RowSize}rem);
  `

  return css`
    ${area}
  `
}

const FullscreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`
const ResponsiveContainer = styled.div`
  position: absolute;
  z-index: 3;
    
  @media ${NotMediaMobile} {
    ${({ area, linksPosition, linksSize }) => getGridArea(area, linksPosition, linksSize)}  
  }
 
  @media ${MediaMobile} {
    ${({ areaMobile, linksPosition, linksSize }) => getGridAreaMobile(areaMobile, linksSize)}
  }
  
  @media ${MediaSmall} {
    min-width: 33.333vw;
    min-height: 33.333vw;
  }
`

const getArea = ({ position, span }) => {
  const [startRowField, startColumnField] = position.split('/')
  const [rowSpanField, columnSpanField] = span.split('/')

  const startRow = parseInt(startRowField)
  const startColumn = parseInt(startColumnField)
  const rowSpan = parseInt(rowSpanField)
  const columnSpan = parseInt(columnSpanField)
  const endRow = startRow + parseInt(rowSpan) - 1
  const endColumn = startColumn + parseInt(columnSpan) - 1

  return { startRow, startColumn, endRow, endColumn, rowSpan, columnSpan }
}

export const ContentBox = ({ content, links }) => {
  /*
   * Get content values
   */
  const {
    alignHorizontal,
    color,
    colorAccent,
    colorBackground,
    colorBackgroundAccent,
    gigsAPI,
    gigsList,
    media,
    position = '4/2',
    positionMobile = '2/1',
    span = '2/4',
    spanMobile = '2/2',
    text,
    type,
    wordWrap,
  } = content
  const colors = { color, colorAccent, colorBackground, colorBackgroundAccent }
  const area = getArea({ position, span })
  const areaMobile = getArea({ position: positionMobile, span: spanMobile })
  const { border, circle, square } = links

  /*
   * Set content component
   */

  let fullscreen = false
  let Content
  switch (type) {
    case 'GIGS':
      Content = (
        <GigsBox
          alignHorizontal={alignHorizontal}
          border={border}
          circle={circle}
          gigsAPI={gigsAPI}
          gigsList={gigsList}
          square={square}
          {...colors}
        />
      )
      break
    case 'MEDIA':
      Content = <MediaBox media={media} />
      fullscreen = media ? media.fullscreen : false
      break

    case 'TEXT':
      Content = (
        <TextBox {...colors} wordWrap={wordWrap} alignHorizontal={alignHorizontal}>
          {renderHtml(text)}
        </TextBox>
      )
      break

    default:
      Content = null
  }

  return fullscreen ? (
    <FullscreenContainer>{Content}</FullscreenContainer>
  ) : (
    <ResponsiveContainer
      area={area}
      areaMobile={areaMobile}
      linksPosition={links.list.length > 0 ? links.position : 'NONE'}
      linksSize={links.size}
    >
      {Content}
    </ResponsiveContainer>
  )
}
