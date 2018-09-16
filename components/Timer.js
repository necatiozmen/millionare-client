import React, { Component } from 'react';
import TimerCountdown from 'react-native-timer-countdown';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo';

class Timer extends Component {

  render() {
    return (
   <TimerCountdown
       initialSecondsRemaining={1000 * this.props.stopTimer }
       // onTick={secondsRemaining => console.log('tick', secondsRemaining)}
       // onTimeElapsed={() =>   this.props.navigation.navigate('Finish') }
       allowFontScaling={true}
       style={{ fontSize: 20 }}
   />

 );
  }
}

export default withNavigation(Timer);
