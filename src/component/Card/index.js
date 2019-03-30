import React from "react"
import styled, { css } from "styled-components"

const animateCardCss = css`
  opacity: 1;
  transform: translateY(0);
`

const baseCss = css`
  background-color: ${props => props.theme.bodyBg};
`

const CardStyled = styled.div`
  background-color: ${props => props.theme.color.white};
  opacity: 0;
  transform: translateY(50px);
  transition: 500ms all ease-in-out;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  ${props => props.animated && animateCardCss};
  ${props => props.primary && baseCss};
`

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animated: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { animated: true }
      })
    }, this.props.delay)
  }

  render() {
    const { delay = 0, noAnimation, primary, ...props } = this.props
    return (
      <CardStyled
        animated={this.state.animated}
        delay={delay}
        primary={primary}
        noAnimation={noAnimation}
        {...props}
      />
    )
  }
}
