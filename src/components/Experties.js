import React from "react"
import Grid from "./Grid"
import Section from "./Section"

export default ({ items, ...props }) => (
  <Section title="Experties" {...props}>
    <Grid />
  </Section>
)
