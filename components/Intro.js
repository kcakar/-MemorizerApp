import React from 'react';
import { Image,View,StyleSheet,Text } from 'react-native';
import AppIntro from  'react-native-app-intro';
import { human,material } from 'react-native-typography'
import { Button } from 'react-native-elements'

export default class Intro extends React.Component{
    
    render(){
        return(
           <AppIntro showSkipButton={false} showDoneButton={false}>
                <View level={10} style={[styles.slideGeneral,styles.slide1]}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.slide1Img} source={require('../img/c1.png')}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.slideText,human.title1White]}>Impove your memory!</Text>
                        <Text style={[styles.slideDesc,material.subheading]}>Learn what you want, when you want.</Text>
                    </View>
                </View>
                <View level={10} style={[styles.slideGeneral,styles.slide2]}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.slide2Img} source={require('../img/c2.png')}></Image>
                    </View>
                    <Text style={[styles.slideText,human.title1White]}>Widen your vocabulary!</Text>
                </View>
                <View level={-10} style={[styles.slideGeneral,styles.slide3]}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.slide3Img} source={require('../img/c3.png')}></Image>
                    </View>
                    <Text style={[styles.slideText,human.title1White]}>Challange your friends!</Text>
                    <Button large 
                        rightIcon={{name: 'favorite'}} 
                        title='START NOW' 
                        buttonStyle={styles.startButton}
                        onPress={this.props.toMainPage}
                    />
                </View>
            </AppIntro>
        );
    }
}

const styles=StyleSheet.create({
    slideGeneral:{
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
    },
    imageContainer:{
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    slide1:{
        backgroundColor:'orange',
    },
    slide2:{
        backgroundColor:'#5e35b1',
    },
    slide3:{
        backgroundColor:'#2e7d32',
    },
    slide1Img:{
        width:300*0.5,
        height:220*0.5
    },
    slide2Img:{
        width:492*0.34,
        height:316*0.34
    },
    slide3Img:{
        marginLeft:25,
        width:2275*0.1,
        height:1844*0.1,
        paddingLeft:20
    },
    slideText:{
        height:200,
        textAlign:'center'
    },
    slideDesc:{
        width:150
    },
    startButton:{
        backgroundColor:'#65CEA6',
        borderRadius:10,
        height:60
    }
});