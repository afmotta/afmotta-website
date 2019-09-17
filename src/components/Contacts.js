import React from "react"
import styled from "styled-components"
import Paragraph from "../components/Paragraph"
import Section from "../components/Section"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Item = styled.div``

export default props => (
  <Section title="Contacts" {...props}>
    <Wrapper>
      <Item>
        <Paragraph>
          <strong>Email</strong>
        </Paragraph>
        <Paragraph>alberto.motta.86@gmail.com</Paragraph>
      </Item>
    </Wrapper>
  </Section>
)
