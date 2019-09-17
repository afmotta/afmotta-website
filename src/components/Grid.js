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

const items = [
  {
    title: "LEADERSHIP",
    text:
      "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
  },
  {
    title: "FRONT-END DESIGN",
    text:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.",
  },
  {
    title: "REACT",
    text:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.",
  },
  {
    title: "JAVASCRIPT",
    text:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.",
  },
  {
    title: "PYTHON",
    text:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.",
  },
  {
    title: "JAVASCRIPT",
    text:
      "Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.",
  },
]

const Grid = props => (
  <Wrapper>
    {items.map(item => (
      <GridItem {...item} />
    ))}
  </Wrapper>
)

export default Grid
