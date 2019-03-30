import React from 'react'

import { DestinationCard } from '../component/Card/Destination.js'

import { InfoCard } from '../component/Card/Info.js'
import { BoardingCard } from '../component/Card/Boarding.js'

export const Overview = () => {
  return (
    <React.Fragment>
      <DestinationCard origin='MUM' destination='LON' />
      <InfoCard title='abc' content='jbr' dark />
      <InfoCard title='abc' content='jbr' />
      <BoardingCard />
    </React.Fragment>
  )
}
