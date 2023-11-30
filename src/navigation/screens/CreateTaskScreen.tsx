import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { initTodo } from '@/redux/slices/todoSlice'

type Props = NativeStackScreenProps<StackParams, "Create">

const CreateTaskScreen: React.FC<Props> = () => {

  const dispatch = useAppDispatch();
  const basicUserInfo = useAppSelector((state) => state.todo);
  
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 ">
      <Text>CreateTask</Text>
      <TouchableOpacity onPress={() => {
        RootNavigation.goBack();
        dispatch(initTodo(false))
      }}>
        <Text>goback</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateTaskScreen;