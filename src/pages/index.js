import React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Contacts from "../components/Contacts"
import TimelineSection from "../components/TimelineSection"
import Intro from "../components/Intro"
import Profiles from "../components/Profiles"
import GridSection from "../components/GridSection"
import Summary from "../components/Summary"
import WithEven from "../components/WithEven"
import getTheme from "../theme"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.75;
  }

  body {
    margin: 0;
  }
`

export default ({ data }) => {
  const {
    colors,
    general,
    experties,
    summary,
    skills,
    profiles,
  } = data.dataJson
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider
        theme={getTheme({
          text: colors.text,
          brand: colors.brand,
          background: colors.background,
        })}
      >
        <WithEven>
          <Intro
            firstName={general.firstName}
            lastName={general.lastName}
            role={general.role}
          />
          <Summary summary={summary} />
          <GridSection title="Experties" items={experties} />
          <GridSection title="Skills" items={skills} />
          <GridSection title="Technologies" items={[1, 2, 3]} />
          <Experience items={[1, 2, 3]} />
          <Education items={[0, 0, 0]} />
          <Profiles items={profiles} />
          <Contacts mail={general.mail} />
        </WithEven>
      </ThemeProvider>
    </React.Fragment>
  )
}

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
        mail
      }
      profiles {
        src
        title
        icon
      }
      colors {
        background
        text
        brand
      }
      experties {
        title
        text
      }
    }
  }
`
