import React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Contacts from "../components/Contacts"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Intro from "../components/Intro"
import Profiles from "../components/Profiles"
import GridSection from "../components/GridSection"
import Summary from "../components/Summary"
import WithEven from "../components/WithEven"
import colors from "../theme/colors"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.75;
  }

  body {
    margin: 0;
    background-color: ${colors.background.main.even}
  }
`

export default ({ data }) => (
  <React.Fragment>
    <GlobalStyle />
    <WithEven>
      <Intro
        firstName={data.dataJson.general.firstName}
        lastName={data.dataJson.general.lastName}
        role={data.dataJson.general.role}
      />
      <Summary summary={data.dataJson.summary} />
      <GridSection title="Experties" items={[1, 2, 3]} />
      <GridSection title="Skills" items={data.dataJson.skills} />
      <GridSection title="Technologies" items={[1, 2, 3]} />
      <Experience items={[1, 2, 3]} />
      <Education items={[0, 0, 0]} />
      <Profiles
        items={data.dataJson.profiles}
      />
      <Contacts />
    </WithEven>
  </React.Fragment>
)

export const query = graphql`
  query {
    dataJson {
      skills {
        title
      }
      summary
      techs
      general {
        title
        firstName
        lastName
        role
      }
      profiles {
        src
        title
        icon
      }
    }
  }
`
