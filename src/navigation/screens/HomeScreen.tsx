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
import KanbanBoard from '@/components/KanbanBoard/KanbanBoard'

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {
  const kanbanData = useSelector(getKabanBoard);
  const dispatch = useAppDispatch();

  console.log(kanbanData);
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <KanbanBoard data={kanbanData} onUpdate={(e)=>console.log(e)}/>
    </SafeAreaView>
  )
}

export default HomeScreen