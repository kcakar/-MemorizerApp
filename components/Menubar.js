import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {material} from 'react-native-typography';

export default class Menubar extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
           
        </View>
        <Text style={[styles.welcome,material.titleWhite]}>Memorizer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    height:50,
    backgroundColor:"#4c1d72",
    alignItems:"center",
    justifyContent:"center"
  },
  welcome:{
    marginTop:15
  }
});
