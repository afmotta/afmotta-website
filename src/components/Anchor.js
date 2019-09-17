import styled from "styled-components"
import colors from "../theme/colors"

export default styled.a`
  color: ${colors.brand};
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`
