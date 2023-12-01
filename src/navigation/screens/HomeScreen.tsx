// @ts-nocheck

import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { useAppDispatch } from '@/redux/store'
import { getKabanBoard } from '@/redux/selectors/todoSelector'
import { useSelector } from 'react-redux'
import { BoardRepository, Board } from 'react-native-draganddrop-board'

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {

  const kanbanData = useSelector(getKabanBoard);
  const dispatch = useAppDispatch();


  const boardRepository = new BoardRepository(kanbanData);
  const handleOnDragEvent = async (srcColumnId: 0, destColumnId: 0, draggedItem: {}) => {
    console.log('onDragEnd', srcColumnId, destColumnId, draggedItem);
  }

  const handleOpen = (item: any) => {
    console.log('item', item);
  }


  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Board
        boardRepository={boardRepository}
        open={handleOpen}
        onDragEnd={handleOnDragEvent}
      // cardContent={(item) => (<View><Text>{item.name}</Text></View>)}
      />
    </SafeAreaView>
  )
}

export default HomeScreen