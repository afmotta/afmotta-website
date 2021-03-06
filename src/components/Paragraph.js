import styled from "styled-components"
import { darken } from "polished"

export default styled.p`
  color: ${({ theme }) => darken(0.4, theme.colors.text)};
  line-height: 1.75;
  margin: 0;
  font-weight: lighter;
`
