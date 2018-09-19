import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  jokerContainer: {
    flex: 1,
    backgroundColor: '#2B1088',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  jokerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6b93b',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  jokerButtonDisabled: {
    backgroundColor: '#f2f2f2',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
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
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
});
