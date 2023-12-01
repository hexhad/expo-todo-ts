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

  const onPressActionButton = ():void => {
    RootNavigation.navigate('Create')
  }
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white ">
      <KanbanBoard data={kanbanData} onUpdate={(e)=>{
        if(e.child.current===e.parent.category){
          RootNavigation.navigate('Details',{e});
        }
        dispatch(updateDraggedData(e))
      }}/>

      <FloatingActionButton onPress={onPressActionButton}/>
    </SafeAreaView>
  )
}

export default HomeScreen