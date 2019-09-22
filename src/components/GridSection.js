import React from "react"
import Grid from "./Grid"
import Section from "./Section"

export default ({ title, items, ...props }) => {
  return (
    <Section title={title} {...props}>
      <Grid items={items} />
    </Section>
  )
}
