import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationBar from './navigation/NavigationBar';
import LinearGradient from 'react-native-linear-gradient';

import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

// function App(): React.JSX.Element{
//     return(
//         <NavigationContainer>
//             <NavigationBar/>
//         </NavigationContainer>
//     );
// }


function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }
  
  function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
        <LinearGradient
        colors={['#31334B','#2E2F40','#222339']}
        start={{x: 0, y: 0 }}
        end={{ x: 1, y: 1}}
        style={styles.sectionContainer}
        >
         <NavigationContainer>
             <NavigationBar/>
         </NavigationContainer>
        </LinearGradient>
    );

  }
  
  const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontFamily: 'Inter_28pt-SemiBold',
      fontSize: 24,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default App;
