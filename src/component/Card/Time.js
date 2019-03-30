import React from 'react'
import styled from 'styled-components'

export const StyledTime = styled.div`
    color: ${props => props.theme.color.primary}
    display: ${props => props.theme.flex.display}
    align-items: ${props => props.theme.flex.center}
    font-size: ${props => props.theme.fontSize.medium}
    justify-content: ${props => props.theme.flex.start}
    font-weight: ${props => props.theme.fontWeight.high}
`

export const TimeCard = props => {
  return (
    <StyledTime>
      {props.time}
    </StyledTime>
  )
}
