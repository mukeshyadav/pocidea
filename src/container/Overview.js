import React from "react"

import mockData from "../mock.json"
import { DestinationCard } from "../component/Card/Destination.js"
import { InfoCard } from "../component/Card/Info.js"
import { BoardingCard } from "../component/Card/Boarding.js"

export default class Overview extends React.Component {
  state = {
    isReady: false
  }
  componentDidMount() {
    const { traveler, segments, origin_iata, destination_iata } = mockData
    this.setState(
      {
        ...this.state,
        traveler: traveler,
        segments: segments,
        origin: origin_iata,
        destination: destination_iata
      },
      () => {
        this.setState({ ...this.state, isReady: true })
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isReady ? (
          <React.Fragment>
            <DestinationCard
              origin={this.state.origin}
              destination={this.state.destination}
            />
            {this.state.segments.map((segment, index) => {
              switch (segment.type) {
                case "GROUND":
                  return <InfoCard {...segment} dark key={index} />
                  break
                case "AIRPORT":
                  return <InfoCard {...segment} key={index} />
                  break
                case "FLIGHT":
                  return <BoardingCard {...segment} key={index} />
                  break
                default:
                  break
              }
            })}
          </React.Fragment>
        ) : (
          "Loading..."
        )}
      </React.Fragment>
    )
  }
}
