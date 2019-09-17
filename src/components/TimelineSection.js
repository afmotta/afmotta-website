import React from "react"
import Timeline from './Timeline'
import Section from "./Section"

export default ({ even, items, ...props }) => (
  <Section title="Experience" even={even} {...props}>
    <Timeline items={items} even={even} />
  </Section>
) 