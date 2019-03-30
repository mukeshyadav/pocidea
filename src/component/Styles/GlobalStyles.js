import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box
        margin: 0
        padding: 0
    }

    html, body, #root {
        height: 100%
        margin: 0
    }
    
    body {
        background-color: ${props => props.theme.color.body}
        color: ${props => props.theme.color.primary}
        font: normal ${props => props.theme.fontSize.default}/normal ${props =>
  props.theme.fontFamily}
    }
`
