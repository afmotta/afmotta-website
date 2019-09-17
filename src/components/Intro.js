import React from "react"
import styled from "styled-components"
import Avatar from "./Avatar"
import Heading from "./Heading"
import Section from "./Section"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-bottom: 2.7125rem;
`

const AvatarWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  color: ${({ theme }) => theme.colors.brand};
`

const Role = styled(Heading)`
  font-weight: 300;
  margin-top: 16px;
`

export default ({ firstName, lastName, role }) => (
  <Section
    full
    columnNode={
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
    }
  >
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
