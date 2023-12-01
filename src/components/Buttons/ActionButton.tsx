import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    label?: string | undefined;
    onPress: any;
}

const ActionButton = ({ label = 'button', onPress }: Props): React.JSX.Element => {
    return (
        <TouchableOpacity
        className='py-3 px-5 bg-slate-900 rounded m-1'
            onPress={onPress}>
            <Text className='text-gray-50 text-base'>{label}</Text>
        </TouchableOpacity>
    )
}

export default ActionButton