import styled from "styled-components"

export default styled.a`
  color: ${({ theme }) => theme.colors.brand};
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`
