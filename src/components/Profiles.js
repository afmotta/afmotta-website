import React from "react"
import styled from "styled-components"
import * as icons from "styled-icons/feather"
import Anchor from "./Anchor"
import Section from "./Section"
import Title from "./Title"
import colors from "../theme/colors"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: -3.5rem;
  position: relative;
`

const Item = styled.div`
  margin-right: 3.5rem;
  padding-bottom: 1rem;
  color: ${colors.text};
  display: flex;
  justify-content: center;
`

const StyledTitle = styled(Title)`
  color: ${colors.brand};
`

const IconWrapper = styled.span`
  width: 20px;
  display: inline-block;
  margin-right: 1rem;
`

export default ({ items, ...props }) => (
  <Section title="Profiles" {...props}>
    <Wrapper>
      {items.map(({ src, title, icon }) => (
        <Item>
          <IconWrapper>{React.createElement(icons[icon])}</IconWrapper>
          <Anchor href={src} target="_blank">
            <StyledTitle level={3}>{title}</StyledTitle>
          </Anchor>
        </Item>
      ))}
    </Wrapper>
  </Section>
)
