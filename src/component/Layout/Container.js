import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    margin: ${props => `${props.theme.margin.none} ${props.theme.margin.auto}`}
    max-width: ${props => props.theme.maxWidth}
    padding: ${props => `${props.theme.padding.large} ${props.theme.padding.medium}`}
`

export const MainContainer = (props) => <StyledContainer>
                                          {props.children}
                                        </StyledContainer>
