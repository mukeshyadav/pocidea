import React from 'react'
import styled from 'styled-components'

export const StyledDestinationCard = styled.div`
    color: ${props => props.theme.color.primary}
    display: ${props => props.theme.flex.display}
    align-items: ${props => props.theme.flex.center}
    font-size: ${props => props.theme.fontSize.medium}
    justify-content: ${props => props.theme.flex.spacebetween}
    font-weight: ${props => props.theme.fontWeight.high}
    margin-bottom: ${props => props.theme.margin.medium}
`

export const DestinationCard = props => {
  const {origin, destination} = props
  return (
    <StyledDestinationCard>
      <span>{origin}</span> -
      <span>{destination}</span>
    </StyledDestinationCard>
  )
}
