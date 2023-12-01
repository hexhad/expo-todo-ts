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
import { addCardData, updateDraggedData } from '@/redux/slices/todoSlice'
import FloatingActionButton from '@/components/Buttons/FloatingActionButton'

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {
  const kanbanData = useSelector(getKabanBoard);
  const dispatch = useAppDispatch();

  console.log(kanbanData);
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white ">
      <KanbanBoard data={kanbanData} onUpdate={(e)=>{
        console.log(e);
        dispatch(updateDraggedData(e))
      }}/>

      <FloatingActionButton onPress={()=>{dispatch(addCardData({"child": {"description": "Learn more about the audience to whom you will be speaking", "id": "4", "name": "Analyze your audience",  current: 'TODO'}, "parent": {"id": 2, "name": "IN_PROGRESS"}}))}}/>
    </SafeAreaView>
  )
}

export default HomeScreen