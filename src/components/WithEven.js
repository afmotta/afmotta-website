import React from "react"

export default props =>
  React.Children.toArray(props.children).map((child, index) =>
    React.cloneElement(child, { even: (index + 1) % 2 === 0 })
  )
