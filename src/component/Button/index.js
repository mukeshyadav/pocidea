import React from 'react'
import styled from 'styled-components'
import { Image } from '../Image/'

const StyledButton = styled.button`
    align-items: ${props => props.theme.flex.center}
    background-color: ${props => props.bg ? props.bg : "transparent"}
    border-radius: ${props =>
      props.radius ? props.theme.button.radius : "none"}
    border: ${props => (props.radius ? props.theme.button.radius : "none")}
    cursor: ${props => props.theme.button.cursor}
    display: ${props => props.theme.flex.display}
    justify-content: ${props => props.theme.flex.center}
    height: ${props =>
      props.large ? props.theme.button.large : props.theme.button.medium}
    padding: ${props =>
      props.large ? props.theme.padding.medium : props.theme.padding.small}
`

export const Button = props => {
  return (
    <StyledButton>
      <React.Fragment>
        {props.src ? <Image {...props} /> : null}
        {props.label ? props.label : null}
      </React.Fragment>
    </StyledButton>
  )
}
