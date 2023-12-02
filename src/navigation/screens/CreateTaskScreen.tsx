import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/store'
import ActionButton from '@/components/buttons/ActionButton'
import InputFiled from '@/components/inputField/InputFiled'
import { Category, addCardData } from '@/redux/slices/todoSlice'
import RadioButton from '@/components/buttons/RadioButton'

type Props = NativeStackScreenProps<StackParams, "Create">

const CreateTaskScreen: React.FC<Props> = () => {

  const [category, setCategory] = useState<Category>('TODO');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<boolean>(false)

  const dispatch = useAppDispatch();
  const basicUserInfo = useAppSelector((state) => state.todo);


  const onPressSaveButton = () => {
    if (!!name) {
      dispatch(addCardData({ name, description, category }));
      Alert.alert('Success', 'Your item has been successfully added to the Kanban Board. Would you like to view it?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: onPressBackButton },
      ]);
    } else {
      setError(true);
    }
  }

  const onPressBackButton = () => {
    RootNavigation.goBack();
  }

  const onNameInputChange = (name: string) => {
    setName(name)
  }
  const onDescInputChange = (desc: string) => {
    setDescription(desc)
  }

  const radioButtonHandle = (type: Category) => {
    setCategory(type)
  }

  useEffect(() => {
    if (!!name) {
      setError(false)
    }     
  }, [name])
  

  return (
    <SafeAreaView className='flex-1'>
      <View className="flex-1 items-center justify-center bg-white ">
        <View>
          <Text className='py-10 text-2xl'>Create Task</Text>
        </View>
        <View>
          <InputFiled onChangeText={onNameInputChange} placeholder={'Name'} error={error}/>
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

export default memo(CreateTaskScreen);