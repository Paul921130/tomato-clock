import React from 'react';
import PropTypes from 'prop-types';
import './CircleProgressP.css';
function formatSecond(secs) {          
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = parseInt( secs - (hr * 3600) - (min * 60));

    while (min.length < 2) { min = '0' + min; };
    while (sec.length < 2) { sec = '0' + min; };
    if (hr) hr += ':';
    return hr + min + ':' + sec;

}
function CirclePrgressP(props) {
    let circleProps={...props}
    let r = (circleProps.size / 2) - circleProps.borderWidth;
    let move= circleProps.size/2;
    let c = r*2*Math.PI; 
    let val= circleProps.value;
    let pct = ((100-val)/100)*c;
    let spacing=30;
    let circleBoxStyle={
        'width': circleProps.size-spacing,
        'height': circleProps.size-spacing,
        'marginLeft':`-${(circleProps.size-spacing)/ 2}px`,
        'marginTop':`-${(circleProps.size-spacing)/ 2}px`
    }
    return (
        <div style={{'width':`${circleProps.size}px`, 'height':`${circleProps.size}px`}} id="cont" data-pct="100">
            <svg id="svg" width={circleProps.size} height={circleProps.size} viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    style={{'strokeWidth':`${circleProps.borderWidth}`}} 
                    r={r} 
                    cx={`${move}`} 
                    cy={`${move}`} 
                    fill="transparent" 
                    strokeDasharray={`${c}`} 
                    strokeDashoffset="0"
                >
                </circle>
                <circle 
                    id="bar"
                    style={{'strokeWidth':`${circleProps.borderWidth}`,'strokeDashoffset':pct}} 
                    r={r} 
                    cx={`${move}`} 
                    cy={`${move}`} 
                    fill="transparent" 
                    strokeDasharray={`${c}`} 
                    strokeDashoffset="0"
                >
                </circle>
            </svg>
            <div className="circle-box" style={circleBoxStyle}>
                <h1 style={{'textAlign':'center','lineHeight':'400px','color':'#FFFFFF','fontSize':'80px'}}>{formatSecond(props.duration)}</h1>
            </div>
        </div>
    )
}

CirclePrgressP.propTypes = {

}

export default CirclePrgressP

