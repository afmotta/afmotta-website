import React from "react"
import styled from "styled-components"
import Heading from "../components/Heading"
import Section from "../components/Section"
import colors from "../theme/colors"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2.7125rem;
`

const FirstName = styled.div`
  text-transform: capitalize;
  font-weight: 300;
  line-height: 1rem;
`

const LastName = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: ${colors.brand};
`

const Role = styled(Heading)`
  font-weight: 300;
  margin-top: 16px;
`

export default ({ firstName, lastName, role }) => (
  <Section full columnNode={"IO"}>
    <Wrapper>
      <div>
        <Heading level={1}>
          <FirstName>{firstName}</FirstName>
          <LastName>{lastName}</LastName>
        </Heading>
        <Role level={6}>{role}</Role>
      </div>
    </Wrapper>
  </Section>
)
