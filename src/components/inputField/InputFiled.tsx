import { View, TextInput } from 'react-native'
import React from 'react'
type Props = {
    onChangeText: (data:string) => any;
    placeholder: string;
    value?: string;
    error?:boolean;
};

const InputFiled = ({ onChangeText, placeholder, value, error= false }: Props): React.JSX.Element => {
    return <TextInput
        className={`w-64 py-3 px-5 ${ error ? 'bg-red-100' : 'bg-slate-200'} rounded m-2 text-black text-base`}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
    />

}

export default InputFiled