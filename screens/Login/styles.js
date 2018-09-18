import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1088',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logoImg: {
    flex: 3,
    justifyContent: 'center',
    marginTop: 90,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    width: 240,
  },
  buttonText: {
    fontFamily: 'MontserratMedium',
    fontSize: 20,
    color: '#fff',
  },
});
