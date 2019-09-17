import React from "react"
import styled from "styled-components"
import Paragraph from "./Paragraph"
import Title from "./Title"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: -3.5rem;
  position: relative;
`

const Item = styled.div`
  flex: 40%;
  margin-right: 3.5rem;
  padding-bottom: 1rem;
`

const GridItem = ({ title, text }) => (
  <Item>
    {title && <Title level={3}>{title}</Title>}
    {text && <Paragraph>{text}</Paragraph>}
  </Item>
)

const Grid = ({ items, ...props }) => (
  <Wrapper>
    {items.map(item => (
      <GridItem {...item} />
    ))}
  </Wrapper>
)

export default Grid
