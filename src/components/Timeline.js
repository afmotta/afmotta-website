import React from "react"
import styled from "styled-components"
import Paragraph from "./Paragraph"
import Small from "./Small"
import Title from "./Title"
import colors from "../theme/colors"

const getBgColor = (isColumn, isEven) =>
  colors.background[isColumn ? "column" : "main"][isEven ? "even" : "odd"]

const Wrapper = styled.div`
  border-color: #404242;
  border-left-width: 2px;
  border-left-style: solid;
  margin-left: calc(1rem - 2px);
  padding-left: 25px;
  position: relative;
`

const TimelineItem = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: -3.5rem;
  position: relative;
  padding-bottom: 2.7125rem;
`

const Info = styled.div`
  flex: 41, 66%;
  margin-right: 3.5rem;
`

const Description = styled.div`
  flex: 58, 33%;
`

const Point = styled.div`
  box-shadow: 0 0 0 6px ${({ even }) => getBgColor(false, even)};
  background: ${colors.brand};
  height: 10px;
  width: 10px;
  position: absolute;
  left: -31px;
  top: 3px;
  border-radius: 50%;
`

export default ({ even, items, ...props }) => (
  <Wrapper {...props}>
    {items.map(item => (
      <TimelineItem {...item}>
        <Info>
          <Small>2018 - present</Small>
          <Title>Eidoo</Title>
          <Paragraph>Lead software developer</Paragraph>
          <Small>Chiasso (CH)</Small>
        </Info>
        <Description>
          <Paragraph>Lorem ipsum</Paragraph>
        </Description>
        <Point even={even} />
      </TimelineItem>
    ))}
  </Wrapper>
)
