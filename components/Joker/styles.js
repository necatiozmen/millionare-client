import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  jokerContainer: {
    flex: 1,
    backgroundColor: '#2B1088',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between',

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
});
