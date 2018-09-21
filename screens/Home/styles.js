import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  jokerTimerContainer:{
    flex:1,
    backgroundColor: '#2B1088',
    justifyContent:'center',
  },
  unvisibleTimer: {
    display: 'none',
  },
  timer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    borderWidth: 4,
    borderColor: '#979797',
    alignSelf: 'center',
    marginBottom: 30,
  },
});
