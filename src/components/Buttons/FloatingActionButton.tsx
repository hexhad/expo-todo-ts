import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className='h-14 w-14 bg-red-400 rounded-full absolute bottom-2 right-2 items-center justify-center'>
      <Text  className="text-xl">+</Text>
    </TouchableOpacity>
  )
}

export default FloatingActionButton
