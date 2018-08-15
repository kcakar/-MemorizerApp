// react-native run-ios
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainPage from './components/MainPage';
import Menubar from './components/Menubar';
import Intro from './components/Intro';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const pageStates={
  'intro':0,
  'main':1
}

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      // page:pageStates.intro
      page:pageStates.main

    }
  }

  toMainPage= ()=>
  {
    console.log("happened")
    this.setState({page:pageStates.main});
  }

  render() {
    if(this.state.page==pageStates.intro)
    {
      return (
        <View style={styles.appContainer}>
          <Intro toMainPage={this.toMainPage}/>
        </View>
      );
    }
    else if(this.state.page===pageStates.main)
    {
      return (
        <View style={styles.appContainer}>
          <Menubar></Menubar>
          <MainPage/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
