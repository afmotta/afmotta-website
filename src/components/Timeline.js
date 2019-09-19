import React from "react"
import styled from "styled-components"
import Paragraph from "./Paragraph"
import Small from "./Small"
import Title from "./Title"
import { getBgColor } from "../theme/utils"

const Wrapper = styled.div`
  border-color: #404242;
  border-left-width: 2px;
  border-left-style: solid;
  margin-left: calc(1rem - 2px);
  padding-left: 25px;
  position: relative;
`

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2.7125rem;
  @media (min-width: 1200px) {
    display: flex;
    flex-flow: row wrap;
    margin-right: -3.5rem;
  }
`

const Info = styled.div`
  flex: 15%;
  margin-right: 3.5rem;
`

const Role = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.brand};
`

const Description = styled.div`
  @media (min-width: 1200px) {
    flex: 50%;
  }
`

const ItemTitle = styled(Title)`
  font-weight: bolder;
`

const Point = styled.div`
  box-shadow: 0 0 0 6px
    ${({ even, theme }) => getBgColor(theme.colors, false, even)};
  background: ${({ theme }) => theme.colors.brand};
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
          <Small>{item.period}</Small>
          <ItemTitle>{item.company}</ItemTitle>
          <Role>{item.title}</Role>
          <Small>{item.location}</Small>
        </Info>
        <Description>
          <Paragraph>{item.text}</Paragraph>
        </Description>
        <Point even={even} />
      </TimelineItem>
    ))}
  </Wrapper>
)
