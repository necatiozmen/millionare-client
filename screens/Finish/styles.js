import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height; 

export default StyleSheet.create({
  finishContainer: {
    backgroundColor: '#2B1088',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  finishHeader: {
    width: width,
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'#c03546',
    marginTop:70,
  },
  headerTextStyle: {
    fontSize: 30,
    padding:20,
    fontFamily: 'MontserratMedium',
    color: '#fff',
  },
  finishMessage:{
    width: width,
    alignItems:'center',
    paddingTop:20,
    paddingBottom:20,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:"#fff",
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'MontserratMedium',
    color: '#fff',
  },
  awardContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  awardHeaderText:{
    fontSize: 23,
    marginBottom:20,
    fontFamily: 'MontserratMedium',
    color: '#fff',
  },
  awardMoney: {
    width:width,
    backgroundColor:'#5CAB7D',
    padding: 15,
    alignItems: 'center',
  },
  awardText: {
    fontSize: 30,
    fontFamily: 'MontserratMedium',
    color: '#fff',

  },
  restartButton: {
    width: 240,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6b93b',
  },
  restartButtonText: {
    fontFamily: 'MontserratMedium',
    fontSize: 20,
    color: '#fff',
  },
});
