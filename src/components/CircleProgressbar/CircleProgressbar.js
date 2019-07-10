import React, { Component } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';

export default class CircleProgressbar extends Component {
    render() {
        let values=[];
        for(let i = 0; i <= 2400 ; i++){
            values.push(i)
        }
        return (
            <ChangingProgressProvider values={values}>
                {percentage => (
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage < 10 ? '0'+percentage:percentage}`}
                    styles={buildStyles({
                        pathTransitionDuration: (60 / 100)
                    })}
                />
                )}
            </ChangingProgressProvider>
        )
    }
}
