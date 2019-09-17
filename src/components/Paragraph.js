import styled from 'styled-components'
import { darken } from 'polished'
import colors from '../theme/colors'

export default styled.p`
  color: ${darken(0.2, colors.text)};
  line-height: 1.75;
  margin: 0;
`