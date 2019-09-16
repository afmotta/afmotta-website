import React from "react"
import { graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Intro from "../components/Intro"
import Summary from "../components/Summary"
import Skills from "../components/Skills"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.75;
  }

  body {
    margin: 0;
  }
`

export default ({ data }) => (
  <React.Fragment>
    <GlobalStyle />
    <Intro
      firstName={data.dataJson.firstName}
      lastName={data.dataJson.lastName}
      role={data.dataJson.role}
    />
    <Summary />
    <Skills />
    
  </React.Fragment>
)

export const query = graphql`
  query {
    dataJson {
      techs
      skills
      firstName
      lastName
      role
    }
  }
`
