import React from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { TimeCard } from './Time.js'

const StyledBoarding = styled.div`
    background-color: ${props => props.theme.color.white}
    border-radius: ${props =>props.theme.button.radius}
    margin-bottom: ${props => props.theme.margin.medium}
`

const GridRow = styled.div`
    background-color: ${props => props.light ? props.theme.color.light : props.theme.color.white }
    display: ${props => props.theme.flex.display}
    justify-content: ${props => props.theme.flex.spacebetween}
    padding: ${props => props.theme.padding.small}
    border-radius: ${props => props.top ?  `${props.theme.button.radius} ${props.theme.button.radius} 0 0` : `0 0 ${props.theme.button.radius} ${props.theme.button.radius}` }
`

const setTime = (val) => {
  const newTime = new Date(val)
  return `${newTime.getHours()}:${newTime.getMinutes()}`
}

export const BoardingCard = (props) => {
  const {origin, destination, departure, detail} = props
  return (
    <React.Fragment>
      <TimeCard time={departure} />
      <StyledBoarding>
        <GridRow light top>
          <Heading h3>
            {detail.flight_number}
          </Heading>
          <Heading h3>
            {setTime(detail.boarding)}
          </Heading>
        </GridRow>
        <GridRow>
          <Heading h3>
            {origin.value}
          </Heading>
          <Heading h3>
            {destination.value}
          </Heading>
        </GridRow>
        <GridRow light>
          <Heading h3>
            {detail.gate}
          </Heading>
          <Heading h3>
            {detail.seat}
          </Heading>
          <Heading h3>
            On Time
          </Heading>
        </GridRow>
      </StyledBoarding>
    </React.Fragment>
  )
}
