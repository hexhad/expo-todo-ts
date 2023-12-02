import { TextInput } from 'react-native'
import React from 'react'

type Props = {
    onChangeText: (data: string) => any;
    placeholder: string;
    value?: string;
    error?: boolean;
    multiLine?: boolean;
};

const InputFiled = ({ onChangeText, placeholder, value, error = false, multiLine = false }: Props): React.JSX.Element => {
    return <TextInput
        className={`w-64 py-3 px-5 ${error ? 'bg-red-100' : 'bg-slate-200'} rounded m-2 text-black text-base max-h-40 `}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        {...(multiLine && { numberOfLines: 6, multiline: true, style: { textAlignVertical: "top" } })}
    />

}

export default InputFiled