import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

type FloatingActionButtonProps = {
  onPress: () => any;
}
const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className={'h-16 w-16 bg-red-400 rounded-full absolute bottom-5 right-5 items-center justify-center'}>
      <Text className="text-3xl">+</Text>
    </TouchableOpacity>
  )
}

export default FloatingActionButton
