import React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import Contacts from "../components/Contacts"
import TimelineSection from "../components/TimelineSection"
import Intro from "../components/Intro"
import Profiles from "../components/Profiles"
import GridSection from "../components/GridSection"
import Summary from "../components/Summary"
import WithEven from "../components/WithEven"
import getTheme from "../theme"

const getGlobalStyle = bgColor => createGlobalStyle`
  * {
    font-family: system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    line-height: 1.75;
  }

  body {
    background-color: ${bgColor};
    margin: 0;
    overflow-x: hidden;
  }
`

export default ({ data }) => {
  const {
    colors,
    education,
    experience,
    experties,
    general,
    profiles,
    skills,
    summary,
    techs,
  } = data.dataJson
  const GlobalStyle = getGlobalStyle(colors.background)
  return (
    <React.Fragment>
      <Helmet title={general.title} />
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
          <GridSection title="Technologies" items={techs} />
          <TimelineSection title="Experience" items={experience} />
          <TimelineSection title="Education" items={education} />
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
      summary
      techs {
        text
        title
      }
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
      skills {
        title
      }
      colors {
        background
        text
        brand
      }
      experties {
        text
        title
      }
      education {
        company
        location
        text
        title
        period
      }
      experience {
        location
        company
        period
        text
        title
      }
    }
  }
`
