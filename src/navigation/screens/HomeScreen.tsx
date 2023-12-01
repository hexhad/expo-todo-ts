import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import { RowRepository,Board } from "react-native-draggable-board";

type Props = NativeStackScreenProps<StackParams, "Home">

const HomeScreen: React.FC<Props> = () => {

  const data = [
    {
      id: 1,
      name: 'Column1',
      rows: [
        { id: 1, name: 'Item1' },
        { id: 2, name: 'Item2' },
        { id: 3, name: 'Item3' },
        { id: 4, name: 'Item4' },
        { id: 5, name: 'Item5' },
        { id: 6, name: 'Item6' },
        { id: 7, name: 'Item7' },
        { id: 8, name: 'Item8' }
      ]
    },
    {
      id: 2,
      name: 'Column2',
      rows: [
        { id: 9, name: 'Item9' },
        { id: 10, name: 'Item10' }
      ]
    }
  ];
  const rowRepository = new RowRepository(data);

  return (
    <View className="flex-1 items-center justify-center bg-white">
       <Board
          style={{}}
          rowRepository={rowRepository}
          renderRow={()=><View><Text>Dummy</Text></View>}
        />
    </View>
  )
}

export default HomeScreen