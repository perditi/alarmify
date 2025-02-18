import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TimerScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Timer</Text>
        </View>
    );
};

export default TimerScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:'brown',
    },
});
