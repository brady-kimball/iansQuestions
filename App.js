import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: 0,
      notQuestions: 0,
    };
  }

  incrementQuestion() {
    const currentQuestions = this.state.questions;
    this.setState({questions: currentQuestions + 1});
  }

  incrementNotQuestion() {
    const currentNotQuestions = this.state.notQuestions;
    this.setState({notQuestions: currentNotQuestions + 1});
  }

  percentageQuestionsAsked() {
    const total = this.state.questions + this.state.notQuestions;
    const percent = this.state.questions / total * 100;

    return <Text style={styles.mainInfo}>{Math.floor(percent * 100) / 100}% questions asked!</Text>;
  }

  clearInfo() {
    this.setState({
      questions: 0,
      notQuestions: 0
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
          source={require('./ian.png')}
          />
        </View>
        <View>
          {this.percentageQuestionsAsked.bind(this)()}
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>Questions: {this.state.questions}</Text>
          <Text style={styles.text}>Not Questions: {this.state.notQuestions}</Text>
        </View>
        <View style={styles.buttons}>
          <Button onPress={this.incrementQuestion.bind(this)}
            title="Ian asked a question" />
          <Button onPress={this.incrementNotQuestion.bind(this)}
            title="Ian didn't ask a question" />
          <Button onPress={this.clearInfo.bind(this)}
            title="Clear" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    margin: '5%',
  },
  mainInfo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center'
  },
  info: {
    marginTop: '5%'
  },
  buttons: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
  }
});
