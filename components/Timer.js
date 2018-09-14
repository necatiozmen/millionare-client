import React, { Component } from 'react';
import TimerCountdown from 'react-native-timer-countdown';

export default () =>
  (
      <TimerCountdown
          initialSecondsRemaining={1000 * 60}
          // onTick={secondsRemaining => console.log('tick', secondsRemaining)}
          // // onTimeElapsed={() => console.log('complete')}
          allowFontScaling={true}
          style={{ fontSize: 20 }}
      />
  );
