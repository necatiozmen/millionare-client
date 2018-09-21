import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import TimerCountdown from 'react-native-timer-countdown';

class Timer extends Component {
  render() {
    return (
      <View>
        <TimerCountdown
          initialSecondsRemaining={1000 * this.props.stopTimer}
          onTimeElapsed={() => this.props.timesUp('timesUp')}
          allowFontScaling={true}
          style={{ fontSize: 55, color: '#fff',  fontFamily: 'MontserratSemiBold', }}
        />
      </View>
    );
  }
}

export default withNavigation(Timer);
