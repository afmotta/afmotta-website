import React from "react"
import Grid from './Grid'
import Section from "./Section"

export default ({ title, items, ...props}) => {
  console.log(title)
  console.log(items)
  return (
  <Section title={title} {...props}>
    <Grid items={items} />
  </Section>
)}
