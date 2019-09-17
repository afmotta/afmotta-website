import React from "react"
import styled from "styled-components"
import Title from "./Title"
import { getBgColor } from "../theme/utils"

const padding = "padding: 4.375rem 5.25rem 3.375rem;"
const Main = styled.div`
  background: ${({ even, theme }) => getBgColor(theme.colors, false, even)};
  flex: 70%;
  ${padding}
`

const MainWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
`

const Column = styled.div`
  background: ${({ even, theme }) => getBgColor(theme.colors, true, even)};
  flex: 30%;
  text-align: right;
  ${padding}
`

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: ${({ full }) => (full ? "100vh" : "auto")};
`

const getColumnNode = props => {
  if (props.columnNode) {
    return props.columnNode
  }
  return <Title level={2}>{props.title || ""}</Title>
}

const Section = ({ children, even, ...props }) => (
  <Wrapper {...props}>
    <Column even={even}>{getColumnNode(props)}</Column>
    <Main even={even}>
      <MainWrapper>{children}</MainWrapper>
    </Main>
  </Wrapper>
)

export default Section
