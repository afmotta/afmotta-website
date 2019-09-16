import React from "react"
import styled from "styled-components"
import Title from "./Title"

const padding = "padding: 4.375rem 5.25rem 1.6625rem;"
const Main = styled.div`
  background: #2d2e2e;
  flex: 70%;
  ${padding}
`

const Column = styled.div`
  background: #2b2c2c;
  flex: 30%;
  text-align: right;
  ${padding}
`

const Wrapper = styled.div`
  display: flex;
  max-width: 1276px;
  margin: 0 auto;
  height: ${({ full }) => (full ? "100vh" : "auto")};
`

const getColumnNode = props => {
  if (props.columnNode) {
    return props.columnNode
  }
  return <Title level={2}>{props.title || ""}</Title>
}

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Column>{getColumnNode(props)}</Column>
    <Main>{children}</Main>
  </Wrapper>
)

export default Section
