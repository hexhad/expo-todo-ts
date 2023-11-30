import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'

type Props = NativeStackScreenProps<StackParams, "Create">

const CreateTaskScreen: React.FC<Props> = () => {
  return (
    <View className="flex-1">
      <Text>CreateTask</Text>
      <TouchableOpacity onPress={() => RootNavigation.goBack()}>
        <Text>goback</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTaskScreen;