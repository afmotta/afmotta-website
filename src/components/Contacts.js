import React from "react"
import styled from "styled-components"
import Anchor from "../components/Anchor"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Item = styled.div``

export default ({ mail, ...props }) => (
  <Section title="Contacts" {...props}>
    <Wrapper>
      <Item>
        <Paragraph>
          <strong>Email</strong>
        </Paragraph>
        <Paragraph>
          <Anchor href={`mailto:${mail}`} target="_blank">
            {mail}
          </Anchor>
        </Paragraph>
      </Item>
    </Wrapper>
  </Section>
)
