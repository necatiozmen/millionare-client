import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height; 

export default StyleSheet.create({
  questionsContainer: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#2B1088',
  },
  question: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    borderBottomWidth:2,
    borderTopWidth:2,
    borderColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  questionText: {
    fontFamily: 'MontserratMedium',
    color: '#fff',
    fontSize: 20,
  },
  answers: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    paddingRight: 60,
    paddingLeft: 60,
    marginBottom:30,
  },
  answerNormalStyle: {
    height: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor: 'black',
    opacity: 1,
  },
  answerText: {
    fontFamily: 'MontserratRegular',
    color: '#fff',
    fontSize: 20,
  },
  answerClickYellow: {
    backgroundColor: '#f6b93b',
  },
  answerTrueColor: {
    backgroundColor: '#5CAB7D',
  },
  answerFalseColor: {
    backgroundColor: '#c03546',
  },
  jokerHalfUnvisible: {
    opacity: 0,
  },
});
