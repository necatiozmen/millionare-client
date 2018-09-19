import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { getQuestions, jokerDouble, isFiftyJokerSelectDispatch } from '../../actions';
import { Button, Icon } from 'native-base';
import styles from './styles';

class Questions extends Component {
  state = {
        questionId: 1,
        counter: 0,
        jokerArray: [],
      };

  componentDidMount() {
    this.props.getQuestions(this.state.questionId);
  }

  componentDidUpdate() {
    if (this.props.isFiftyJokerSelect) this.jokerUnvisible(this.props.jokerFiftyValue); // yari-yariya joker den gelen arraydeki siklari unvisible yapar
  }

  doubleJokerFunc = () => {
    if (this.state.jokerArray.includes(this.props.questionsAnswers.correctAnswer)) { //  eger cift seceneklerden  biri dogru ise
      this.props.isDoubleJokerSelectDispatch(false); // cift secenek jokerin answerCheck de bir daha kullanilmamasi icin false
      this.correctAnswerColor(this.props.questionsAnswers.correctAnswer);
      setTimeout(() => {
        this.jokerAfterStyle(), //siklardaki rengi temizle
        this.props.getQuestions(this.props.questionsAnswers.id + 1),
        this.props.prizeChange(true);}, 2000);
    } else {
      this.correctAnswerColor(this.props.questionsAnswers.correctAnswer);
      setTimeout(() => {
        this.props.prizeChange(false);},
       2000);
    }
  };

  answerCheck = (userAnswer) => {
      userAnswer.setNativeProps({ style: styles.answerClickYellow });
      if (this.props.jokerDoubleValue && this.state.counter <= 1) {
        this.setState({ counter: this.state.counter + 1 });
        switch (userAnswer.props.answerKey) {
          case 'a':
            this._answera.setNativeProps({ style: styles.answerClickYellow });
            this.setState({ jokerArray: [...this.state.jokerArray, 'a'] });
            break;
          case 'b':
            this._answerb.setNativeProps({ style: styles.answerClickYellow });
            this.setState({ jokerArray: [...this.state.jokerArray, 'b'] });
            break;
          case 'c':
            this._answerc.setNativeProps({ style: styles.answerClickYellow });
            this.setState({ jokerArray: [...this.state.jokerArray, 'c'] });
            break;
          case 'd':
            this._answerd.setNativeProps({ style: styles.answerClickYellow });
            this.setState({ jokerArray: [...this.state.jokerArray, 'd'] });
            break;
        }
        if (this.state.counter === 1) setTimeout(() => this.doubleJokerFunc(), 2000); //cifte sans jokerinde kullanicinin sectigi siklardan olusan array'i yollayip dogru cevap kontrolu yap

      } else {
        if (userAnswer.props.answerKey == this.props.questionsAnswers.correctAnswer) { // eger cevap dogru ise
          setTimeout(() => userAnswer.setNativeProps({ style: styles.answerTrueColor }), 1000);
          setTimeout(() => {
            this.props.getQuestions(this.props.questionsAnswers.id + 1),
            this.props.prizeChange(true), // parent daki updatePrize functioni calistirir -> kazanilan parayi artirir
            userAnswer.setNativeProps({ style: styles.answerNormalStyle });}, 2000); // secilen element rengini eski haline cevir
          setTimeout(() => this.jokerAfterStyle(), 2000); // fifty joker icin unvisiblelari visible yapar eger kullanilmi ise
        } else {
          setTimeout(() => userAnswer.setNativeProps({ style: styles.answerFalseColor },
            this.correctAnswerColor(this.props.questionsAnswers.correctAnswer)), 1000); // dogru soruyu gostermek icin 1 sn bekleyip yesil yapiyor
          setTimeout(() => {this.props.prizeChange(false);}, 2000);
        }
      }
    };

  correctAnswerColor = (value) => {
    switch (value) {
      case 'a':
        this._answera.setNativeProps({ style: styles.answerTrueColor });
        break;
      case 'b':
        this._answerb.setNativeProps({ style: styles.answerTrueColor });
        break;
      case 'c':
        this._answerc.setNativeProps({ style: styles.answerTrueColor });
        break;
      case 'd':
        this._answerd.setNativeProps({ style: styles.answerTrueColor });
        break;
    }
  };

  jokerAfterStyle = (value) => {
      this._answera.setNativeProps({ style: styles.answerNormalStyle });
      this._answerb.setNativeProps({ style: styles.answerNormalStyle });
      this._answerc.setNativeProps({ style: styles.answerNormalStyle });
      this._answerd.setNativeProps({ style: styles.answerNormalStyle });
    };

  jokerUnvisible = (value) => {
      if (value.includes('a')) this._answera.setNativeProps({ style: styles.jokerHalfUnvisible });
      if (value.includes('b')) this._answerb.setNativeProps({ style: styles.jokerHalfUnvisible });
      if (value.includes('c')) this._answerc.setNativeProps({ style: styles.jokerHalfUnvisible });
      if (value.includes('d')) this._answerd.setNativeProps({ style: styles.jokerHalfUnvisible });
      this.props.isFiftyJokerSelectDispatch(false);
    };

  render() {
    return (
      <View style={styles.questionsContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText} >
            {this.props.questionsAnswers.question}
          </Text>
        </View>
        <View style={styles.answers}>
        <TouchableOpacity onPress={() => this.answerCheck(this._answera)}>
          <View
            answerKey='a'
            style={styles.answerNormalStyle}
            ref={view => this._answera = view }
          >
            <Text style={styles.answerText}>
              {this.props.questionsAnswers.answer.a}
            </Text>
          </View>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => this.answerCheck(this._answerb)}>
         <View
           answerKey='b'
           style={styles.answerNormalStyle}
           ref={view => this._answerb = view }
          >
          <Text style={styles.answerText}>
            {this.props.questionsAnswers.answer.b}
          </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => this.answerCheck(this._answerc)}>
         <View
           answerKey='c'
           style={styles.answerNormalStyle}
           ref={view => this._answerc = view }
         >
          <Text style={styles.answerText}>
            {this.props.questionsAnswers.answer.c}
          </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => this.answerCheck(this._answerd)}  >
         <View
           answerKey='d'
           style={styles.answerNormalStyle}
           ref={view => this._answerd = view }
         >
           <Text style={styles.answerText}>
             {this.props.questionsAnswers.answer.d}
           </Text>
         </View>
       </TouchableOpacity>
       </View>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  questionsAnswers: state.questions,
  jokerFiftyValue: state.joker.jokerFifty,
  jokerDoubleValue: state.joker.jokerDouble,
  isFiftyJokerSelect: state.joker.isFiftyJokerSelect,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: id => dispatch(getQuestions(id)),
  isDoubleJokerSelectDispatch: data => dispatch(jokerDouble(data)),
  isFiftyJokerSelectDispatch: data => dispatch(isFiftyJokerSelectDispatch(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
