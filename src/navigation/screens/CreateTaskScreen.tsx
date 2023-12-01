import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/store'
import ActionButton from '@/components/Buttons/ActionButton'
import InputFiled from '@/components/Input/InputFiled'
import { Category, addCardData } from '@/redux/slices/todoSlice'
import RadioButton from '@/components/Buttons/RadioButton'

type Props = NativeStackScreenProps<StackParams, "Create">

const CreateTaskScreen: React.FC<Props> = () => {

  const [category, setCategory] = useState<Category>('TODO')
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const dispatch = useAppDispatch();
  const basicUserInfo = useAppSelector((state) => state.todo);


  const onPressSaveButton = () => {
    dispatch(addCardData({ name, description, category}))
  }

  const onPressBackButton = () => {
    RootNavigation.goBack();
  }

  const onNameInputChange = (name:string) => {
    setName(name)
  }
  const onDescInputChange = (desc:string) => {
    setDescription(desc)
  }

  const radioButtonHandle = (type: Category) => {
    setCategory(type)
  }


  return (
    <SafeAreaView className='flex-1'>
      <View className="flex-1 items-center justify-center bg-white ">
        <View>
          <Text className='py-10 text-2xl'>Create New Task</Text>
        </View>
        <View>
          <InputFiled onChangeText={onNameInputChange} placeholder={'Name'} />
          <InputFiled onChangeText={onDescInputChange} placeholder={'Description'} />
        </View>
        <View className='flex-row my-6'>
          <RadioButton
            state={category === 'TODO'}
            onPress={() => radioButtonHandle('TODO')}
            label={'TODO'} />
            <RadioButton
            state={category === 'IN_PROGRESS'}
            onPress={() => radioButtonHandle('IN_PROGRESS')}
            label={'IN_PROGRESS'} />
            <RadioButton
            state={category === 'DONE'}
            onPress={() => radioButtonHandle('DONE')}
            label={'DONE'} />

        </View>
        <View className='flex-row'>
          <ActionButton onPress={onPressBackButton} label={'Cancel'} />
          <ActionButton onPress={onPressSaveButton} label={'Save'} />
        </View>

      </View>
    </SafeAreaView>

  )
}

export default CreateTaskScreen;