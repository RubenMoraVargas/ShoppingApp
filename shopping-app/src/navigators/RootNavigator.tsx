import React from 'react'
import { type NavigatorScreenParams } from '@react-navigation/native'
import {
  type NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailsScreen'
import TabsNavigator, { type TabsStackParamList } from './TabsNavigator'

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>
  Details: {
    id: string
  }
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  )
}

export default RootNavigator
