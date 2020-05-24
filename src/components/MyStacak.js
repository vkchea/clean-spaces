import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './Main';
import Login from './Login';
import Contribution from './Contribution';
import Report from './Report';
import Hotspot from './Hotspot';
import Welcome from './Welcome';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name ='Hotspot' component={Hotspot}/>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Report' component={Report}/>
        <Stack.Screen name='Contribution' component={Contribution}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator