import React, { Component } from 'react'
import Countdown, { zeroPad } from 'react-countdown';
import moment from 'moment'
import ScaleText from "react-scale-text";

import Message from './testfirebase'


export class first extends Component {

    constructor() {
        super();
        this.state = {
            DateStart: moment("2023-04-01"),
            DateEnd: moment("2023-06-01"),
            DateCount: 0,
            DateNow: moment(Date.now())
        }
    }
    render() {
        let time = 0
        if (this.state.DateEnd) {
            time = moment.duration(this.state.DateEnd.diff(this.state.DateNow));
        }

        const renderer = ({ days, hours, minutes, seconds }) => {
            return (
                <div style={{
                    flex: 1,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',

                }
                }>
                    <Message DateCountdown={days} DatetimePost={new Date()} />
                    <ScaleText >
                        <span>Day : {days}</span>
                    </ScaleText>
                    <ScaleText >
                        <span>Time : {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
                    </ScaleText>
                </div >
            )
        };

        return (
            <div >
                <Countdown date={Date.now() + time}
                    zeroPadTime={2}
                    zeroPadDays={2}
                    renderer={renderer}
                />
            </div>

        )
    }
}

export default first