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

export const InfoCard = (props) => {
  return (
    <React.Fragment>
      <TimeCard time='7:20' />
      <StyledInfo {...props}>
        <Heading h3>
          {props.title}
        </Heading>
        <Heading p>
          {props.content}
        </Heading>
      </StyledInfo>
    </React.Fragment>)
}
