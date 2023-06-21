import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/components/Splash';
import BottomNavigation from './src/navigations/BottomNavigation';
const Stack = createStackNavigator();
import GlobalContext from './src/context/GlobalContext';

export class App extends Component {
  render() {
    return (
      <GlobalContext>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen
              name="bottomNavigation"
              component={BottomNavigation}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContext>
    );
  }
}

export default App;
