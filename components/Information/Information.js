import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from './styles';

class Information extends Component {
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.starMoneyContainer}>
          <View style={styles.questionInfo}>
            <View style={styles.moneyContainer}>
              <Text style={styles.moneyText}>
                ${this.props.prize}
              </Text>
            </View>
            <View style={styles.questionCountContainer}>
              <View>
                <Text style={styles.questionCountText}>
                  SORU: {this.props.currentQuestionId}
                </Text>
              </View>
              <View>
                <Text style={styles.questionCountText}>
                  Kalan Soru: {10 - this.props.currentQuestionId}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.leaveGameButton()}
                style={styles.exitTouchable}
              >
                <Text style={styles.exitButtonText}>
                  CEKIL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View >
            <StarRating
              starSize={20}
              disabled={false}
              maxStars={10}
              fullStarColor={'#f6b93b'}
              rating={parseInt(this.props.currentQuestionId)}
            />
          </View>
        </View>
    );
  }
};

const mapStateToProps = state => ({
  currentQuestionId: state.questions.currentQuestionId,
  });

export default connect(mapStateToProps, null)(Information);
