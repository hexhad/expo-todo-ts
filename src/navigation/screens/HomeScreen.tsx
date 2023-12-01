import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import { BoardRepository, Board } from 'react-native-draganddrop-board'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getKabanBoard } from '@/redux/selectors/todoSelector'
import { onDragUpdater } from '@/redux/slices/todoSlice'

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {
  const basicUserInfo = useAppSelector(getKabanBoard);
  const dispatch = useAppDispatch();

  const boardRepository = new BoardRepository(basicUserInfo);

  const handleOnDragEvent = (srcColumnId: any, destColumnId: any, draggedItem: any) => {
    // dispatch(onDragUpdater({payload:boardRepository}))
    console.log('onDragEnd', srcColumnId, destColumnId, draggedItem);
  }

  const handleOpen = (item: any) => {
    console.log('item', item);
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Board
        boardBackground={'#36454F'}
        boardRepository={boardRepository}
        open={handleOpen}
        onDragEnd={handleOnDragEvent}
      />
    </SafeAreaView>
  )
}

export default HomeScreen