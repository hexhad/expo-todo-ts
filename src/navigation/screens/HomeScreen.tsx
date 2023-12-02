import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/redux/store'
import { getKabanBoard } from '@/redux/selectors/todoSelector'
import KanbanBoard from '@/components/kanbanBoard/KanbanBoard'
import { addCardData, updateDraggedData } from '@/redux/slices/todoSlice'
import FloatingActionButton from '@/components/buttons/FloatingActionButton'

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {
  const kanbanData = useSelector(getKabanBoard);
  const dispatch = useAppDispatch();

  const onPressActionButton = (): void => {
    RootNavigation.navigate('Create')
  }

  const onDragEvent = (task: {}) => {
    dispatch(updateDraggedData(task))
  }

  const onPressItem = ({ task }: { task: any }) => {
    const { description: desc, id, name, current: category } = task
    RootNavigation.navigate('Details', {
      name,
      desc,
      id,
      category
    })
  }


  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-800 ">
      <KanbanBoard data={kanbanData} onUpdate={onDragEvent} onPressItem={onPressItem} />
      <FloatingActionButton onPress={onPressActionButton} />
    </SafeAreaView>
  )
}

export default HomeScreen