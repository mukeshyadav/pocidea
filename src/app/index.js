import React from 'react'
import { ThemeProvider } from 'styled-components'

import { PrimaryTheme } from '../component/Theme'
import { GlobalStyle } from '../component/Styles/GlobalStyles'
import { MainContainer } from '../component/Layout/Container'

import { Header } from './Header'
import Overview from '../container/Overview'

const YiluApp = () => {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Header title='Overview' />
        <MainContainer>
          <Overview />
        </MainContainer>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default YiluApp
