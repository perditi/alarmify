import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import AlarmScreen from './AlarmScreen';
import TimerScreen from './TimerScreen';
import StopwatchScreen from './StopwatchScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//typescript refuses to acknowledge these are SVGs despite all my setup -_-
import AlarmIcon from './assets/icons/AlarmIcon.svg'; 
import TimerIcon from './assets/icons/TimerIcon.svg';
import StopwatchIcon from './assets/icons/StopwatchIcon.svg';




const Tab = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopColor: '#5B5D7E',
          height: 100,
        },
        tabBarActiveBackgroundColor: '#252639',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Alarm':
              iconName = 'alarm';
              break;
            case 'Timer':
              iconName = 'timer';
              break;
            case 'Stopwatch':
              iconName = 'timer-off';
              break;
            default:
              iconName = "";
          }

          // Return the SVG icon
          return (
            <MaterialIcons
            name={iconName}
            size={size || 24}
            color={focused ? '#fff' : '#aaa'}
          />
          );
        },
      })}
    >
      <Tab.Screen name="Alarm" component={AlarmScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
    </Tab.Navigator>
  );
};

export default NavigationBar;