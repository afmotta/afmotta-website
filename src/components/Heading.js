import React from 'react'
import styled, { css } from 'styled-components'
import colors from "../theme/colors"

const fontSizes = {
  1: 70,
  2: 60,
  3: 48,
  4: 34,
  5: 24,
  6: 20,
}

const fontSizeCss = ({ level }) => {
  const fontSize = fontSizes[level] || fontSizes[6]
  return `
    font-size: ${fontSize}px;
    letter-spacing: 0.25px;
  `
}

const headingStyles = css`
  ${fontSizeCss};
  margin: 0;
  color: ${colors.text};
`

const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${headingStyles};
`

export default Heading
