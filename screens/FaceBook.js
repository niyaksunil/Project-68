import * as React from 'react';
import {StyleSheet,Text, View} from "react-native";
import { Linking } from 'react-native';

export default class FaceBook extends React.Component{
    render(){
        return(
            <View>
                <Text style = {styles.text} onPress={() => Linking.openURL('https://www.facebook.com/')}>FaceBook</Text>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize :20 , 
        color : "maroon",
        alignSelf : 'center',
        marginTop : 90
    }
})