import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => RootNavigation.navigate('Details')}>
        <Text>Task</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => RootNavigation.navigate('Create')}>
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen