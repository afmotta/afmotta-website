import React from "react"
import styled from "styled-components"
import Jpeg from "../../static/avatar.jpeg"

const Img = styled.img`
  border-radius: 50%;
  width: 14rem;
  border: 0;
`
export default () => <Img src={Jpeg} />
