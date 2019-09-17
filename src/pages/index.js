import React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Contacts from "../components/Contacts"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Experties from "../components/Experties"
import Intro from "../components/Intro"
import Profiles from "../components/Profiles"
import Skills from "../components/Skills"
import Summary from "../components/Summary"
import Technologies from "../components/Technologies"
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
      <Experties items={data.dataJson.experties} />
      <Skills items={data.dataJson.skills} />
      <Technologies items={data.dataJson.techs} />
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
      skills
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
