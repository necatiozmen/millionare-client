import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  starMoneyContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxHeight: 120,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#2a363b',
  },
  questionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  questionCountContainer: {
    justifyContent: 'space-around',
  },
  questionCountText: {
    fontFamily: 'MontserratRegular',
    color: '#fff',
    fontSize: 17,
  },
  moneyContainer: {
    width: 70,
  },
  moneyText: {
    fontFamily: 'MontserratMedium',
    color: '#f6b93b',
    fontSize: 27,
    paddingBottom: 10,
  },
  exitTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#c03546',
  },
  exitButtonText: {
    fontSize: 12,
    fontFamily: 'MontserratMedium',
    color: '#fff',
  },
});
