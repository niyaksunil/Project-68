import * as React from 'react';
import {StyleSheet,Text, View} from "react-native";
import { Linking } from 'react-native';

export default class Instagram extends React.Component{
    render(){
        return(
            <View>
                <Text style = {styles.text} onPress={() => Linking.openURL('https://www.instagram.com/')}>Instagram</Text>   
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