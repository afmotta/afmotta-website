import React from "react"
import Paragraph from "./Paragraph"
import Section from "./Section"

export default ({ summary, ...props }) => (
  <Section title="Summary" {...props}>
    <Paragraph>
      { summary }
    </Paragraph>
  </Section>
)
