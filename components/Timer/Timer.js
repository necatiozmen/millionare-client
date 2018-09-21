import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import TimerCountdown from 'react-native-timer-countdown';

class Timer extends Component {

  secondFormat = (milliseconds) => {
    const remainingSec = Math.round(milliseconds / 1000);
    const seconds = parseInt((remainingSec % 60).toString());
    if(!isNaN(seconds)) return seconds;
  }

  render() {
    return (
      <View>
        <TimerCountdown
          formatSecondsRemaining={this.secondFormat}
          initialSecondsRemaining={1000 * this.props.stopTimer}
          onTimeElapsed={() => this.props.timesUp('timesUp')}
          allowFontScaling={true}
          style={{ fontSize: 55, color: '#fff',  fontFamily: 'MontserratSemiBold', }}
        />
         {this.secondFormat()}
      </View>
    );
  }
}

export default withNavigation(Timer);
