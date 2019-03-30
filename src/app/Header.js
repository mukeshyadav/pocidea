import React from "react"
import styled from "styled-components"
import icoBack from "../images/ico-back.svg"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"

const HeaderWrapper = styled.header`
  align-items: ${props => props.theme.flex.center}
  background-color: ${props => props.theme.header.bg}
  color: ${props => props.theme.header.color}
  display: ${props => props.theme.flex.display}
  justify-content: ${props => props.theme.flex.center}
  height: ${props => props.theme.header.height}
  padding: ${props => props.theme.padding.large}
`

const MainHeading = styled(Heading)`
  margin: ${props => props.theme.margin.auto};
`

const propsIcoBack = {
  src: icoBack,
  alt: "Back",
  height: "25px",
  width: "25px",
  position: "right"
}

export const Header = props => {
  return (
    <HeaderWrapper>
      <Button {...propsIcoBack} />
      <MainHeading h3>{props.title}</MainHeading>
    </HeaderWrapper>
  )
}
