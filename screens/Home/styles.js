import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  jokerContainer:{
    flex:1
  },
  starMoneyContainer: {
    maxHeight:120,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#4286f4',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:20,

  },
  questionInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
    paddingBottom:20,
  },
  questionCount:{

  },
  questionCountItem:{
    paddingBottom:5,
  },
  questionCountText:{
    fontFamily: 'MontserratRegular',
    color:'#fff',
    fontSize:20,
  },
  moneyContainer:{
    width:70,
  },
  moneyText:{
    fontFamily: 'MontserratMedium',
    color:'#f6b93b',
    fontSize:27,
    paddingBottom:10,
  },
  exitTouchable:{
    justifyContent:'center',
    alignItems:'center',
    width:55,
    height:55,
    borderRadius:27.5,
    backgroundColor:'#c03546'
  },
  exitButtonText:{
  fontFamily: 'MontserratMedium',
  color:'#fff',
  },

});
