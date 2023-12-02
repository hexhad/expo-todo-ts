import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import RadioButton from '../buttons/RadioButton';
import ActionButton from '../buttons/ActionButton';
import InputFiled from '../inputField/InputFiled';
import { Category } from '@/redux/slices/todoSlice';

type ModalProps = {
    visibility: boolean;
    onUpdated: (data: any) => any;
    name: string;
    id: number;
    desc: string;
    type: Category;
    hideModal: () => void;
}

const EditModal = ({ visibility = false, onUpdated, name: oldName, id, desc, type, hideModal }: ModalProps): React.JSX.Element => {

    const [category, setCategory] = useState<Category>(type)
    const [name, setName] = useState<string>(oldName)
    const [description, setDescription] = useState<string>(desc)

    const onNameInputChange = (name: string) => {
        setName(name)
    }
    const onDescInputChange = (desc: string) => {
        setDescription(desc)
    }
    const radioButtonHandle = (state: Category) => {
        setCategory(state)
    }
    const onPressBackButton = () => {
        hideModal()
    }
    const onPressUpdateButton = () => {
        onUpdated({
            category,
            description,
            name,
            id
        });
        hideModal()
    }
    return (
        <Modal visible={visibility} transparent >

            <View className=' flex-1 items-center justify-center' style={{ backgroundColor: '#00000032' }}>
                <View className=' bg-white py-7 px-2 rounded'>
                    <View className="items-center justify-center bg-white ">
                        <View>
                            <Text className='py-5 text-2xl'>Update Task</Text>
                        </View>
                        <View>
                            <InputFiled onChangeText={onNameInputChange} placeholder={'Name'} value={name} />
                            <InputFiled onChangeText={onDescInputChange} placeholder={'Description'} value={description} />
                        </View>
                        <View className='flex-row my-6'>
                            <RadioButton
                                state={category === 'TODO'}
                                onPress={() => radioButtonHandle('TODO')}
                                label={'TODO'} />
                            <RadioButton
                                state={category === 'IN_PROGRESS'}
                                onPress={() => radioButtonHandle('IN_PROGRESS')}
                                label={'IN_PROGRESS'} />
                            <RadioButton
                                state={category === 'DONE'}
                                onPress={() => radioButtonHandle('DONE')}
                                label={'DONE'} />

                        </View>
                        <View className='flex-row'>
                            <ActionButton onPress={onPressBackButton} label={'Cancel'} />
                            <ActionButton onPress={onPressUpdateButton} label={'Update'} />
                        </View>

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditModal