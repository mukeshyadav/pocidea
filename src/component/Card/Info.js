import React from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
import { TimeCard } from './Time.js'

const StyledInfo = styled.div`
    background-color: ${props => props.dark ? props.theme.color.dark : props.theme.color.light}
    border-radius: ${props =>props.theme.button.radius}
    color: ${props => props.theme.color.white}
    display: ${props => props.theme.flex.display}
    align-items: ${props => props.theme.flex.center}
    padding: ${props => props.theme.padding.medium}
    margin-bottom: ${props => props.theme.margin.medium}
`

const StyledDetails = styled.span`
  background-color: ${props => props.busy ? props.theme.color.red : props.theme.color.green}
  color: ${props => props.theme.color.white}
  padding: ${props => props.theme.padding.small}
`

export const InfoCard = (props) => {
  const {origin, departure, detail=null } = props
  const isBusy = detail && detail.busyness_index > 5 ? true : false
  return (
    <React.Fragment>
      <TimeCard time={departure} />
      <StyledInfo {...props}>
        <Heading h3>
          {origin.type === 'STREET_ADDRESS' ? `Pick up From:` : `${origin.value} Airport`}
        </Heading>
        <Heading p>
          {origin.type === 'STREET_ADDRESS' ? origin.value : 'Terminal C'}
        </Heading>
        {detail ?
           <StyledDetails busy={isBusy}>
             {isBusy ? ' Busy ' : ' Not Busy '}
           </StyledDetails> : null}
      </StyledInfo>
    </React.Fragment>)
}
