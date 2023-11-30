import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'

type Props = NativeStackScreenProps<StackParams, "Details">

const TaskDetailsScreen: React.FC<Props> = ({ }) => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>TaskDetails</Text>
            <TouchableOpacity onPress={() => RootNavigation.goBack()}>
                <Text>goback</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskDetailsScreen