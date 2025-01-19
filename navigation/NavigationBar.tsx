import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlarmScreen from './AlarmScreen';
import TimerScreen from './TimerScreen';
import StopwatchScreen from './StopwatchScreen';

const Tab = createBottomTabNavigator();
const NavigationBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    height: 100,},
                tabBarActiveBackgroundColor: '#252639',
            }}>

            <Tab.Screen name="Alarm" component={AlarmScreen}/>
            <Tab.Screen name="Timer" component={TimerScreen}/>
            <Tab.Screen name="Stopwatch" component={StopwatchScreen}/>
        </Tab.Navigator>
    );
};

export default NavigationBar;
