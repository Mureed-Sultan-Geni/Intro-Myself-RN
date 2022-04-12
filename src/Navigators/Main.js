import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/Containers/home'
import Login from '../Containers/login'
import Education from '@/Containers/Details/education'
import Experience from '@/Containers/Details/experience'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'brown',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Experience" component={Experience} />
    </Stack.Navigator>
  )
}

export default MainNavigator
