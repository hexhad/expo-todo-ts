import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
type Props = {
    state: boolean,
    onPress:()=>any,
    label:string
}
const RadioButton = ({ state = false,onPress,label = 'radio' }: Props): React.JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-row items-center mx-2'>
            <View className='bg-slate-200 h-6 w-6 rounded items-center justify-center m-1'>
                {state && <View className='bg-slate-900 h-3 w-3 rounded' />}
            </View>
            <Text className='text-base ml-2'>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default RadioButton