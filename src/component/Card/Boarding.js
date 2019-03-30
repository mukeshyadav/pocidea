import React from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'

const StyledBoarding = styled.div`
    background-color: ${props => props.theme.color.white}
    border-radius: ${props =>props.theme.button.radius}
    margin-top: ${props => props.theme.margin.medium}
`

const GridRow = styled.div`
    background-color: ${props => props.light ? props.theme.color.light : props.theme.color.white }
    display: ${props => props.theme.flex.display}
    justify-content: ${props => props.theme.flex.spacebetween}
    padding: ${props => props.theme.padding.small}
    
    border-radius: ${props => props.top ?  `${props.theme.button.radius} ${props.theme.button.radius} 0 0` : `0 0 ${props.theme.button.radius} ${props.theme.button.radius}` }
`

export const BoardingCard = (props) => {
  return (
    <StyledBoarding>
      <GridRow light top>
        <Heading h3>
          LH Z588
        </Heading>
        <Heading h3>
          LH Z588
        </Heading>
      </GridRow>
      <GridRow>
        <Heading h3>
          LH Z588
        </Heading>
        <Heading h3>
          LH Z588
        </Heading>
      </GridRow>
      <GridRow light>
        <Heading h3>
          LH Z588
        </Heading>
        <Heading h3>
          LH Z588
        </Heading>
      </GridRow>
    </StyledBoarding>
  )
}
