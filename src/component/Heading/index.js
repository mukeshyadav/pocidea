import React from "react"
import styled, { css } from "styled-components"

const baseStyles = css`
  text-align: ${props =>
    props.align === "center"
      ? "center"
      : props.align === "right"
      ? "right"
      : "left"};
  font-weight: 700;
`
const HeadingOne = styled.h1`
  font-size: 3.5em;
  ${baseStyles};
`

const HeadingTwo = styled.h2`
  font-size: 2.5em;
  ${baseStyles};
`

const HeadingThree = styled.h3`
  font-size: 1.5em;
  ${baseStyles};
`

const Paragraph = styled.p`
  font-size: 1em;
  ${baseStyles};
`

export const Heading = ({ h2, h3, p, align, ...props }) =>
  h2 ? (
    <HeadingTwo align={align} {...props} />
  ) : h3 ? (
    <HeadingThree align={align} {...props} />
  ) : p ? (
    <Paragraph align={align} {...props} />
  ) : (
    <HeadingOne align={align} {...props} />
  )
