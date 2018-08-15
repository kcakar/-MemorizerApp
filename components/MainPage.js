import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcome}>--</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7400ad',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
