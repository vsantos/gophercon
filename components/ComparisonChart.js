import React, { Component } from 'react'
import styled from 'styled-components'

import chartXkcd from 'chart.xkcd';
import { Line, Bar, Pie, XY } from "chart.xkcd-react"

const LayoutStyled = styled.div`
  width: '100vw';
  height: '100vw';
  padding: '10vw';
`

export default class MyChart extends Component {
  render() {    
    return (
      <LayoutStyled>

        {this.props.children}
      
      <Bar
        config={{
          title: '', // optional
          // xLabel: 'tools', // optional
          yLabel: '~ time (s)', // optional
          data: {
            labels: ['show', 'CLI show', 'shift', 'CLI shift', 'clear', 'CLI clear'],
            datasets: [{
              data: [3, 0.3, 6, 0.2, 4, 0.3],
            }],
          },
          options: {
            dataColors: ["rgba(0, 240, 0)","rgba(0, 240, 240)", "rgba(0, 240, 0)", "rgba(0, 240, 240)", "rgba(0, 240, 0)", "rgba(0, 240, 240)"],
            yTickCount: 10,
            unxkcdify: false,
          },
        }}
      />
      
      </LayoutStyled>
    )
  }
}