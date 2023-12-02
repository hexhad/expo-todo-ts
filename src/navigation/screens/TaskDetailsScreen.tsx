import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import ActionButton from '@/components/buttons/ActionButton'
import { RootNavigation } from '@/services/RootNavigation'
import EditModal from '@/components/modal/EditModal'
import { Category, deleteCard, updateCard } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'

type ModalActionProps = {
    category: Category;
    description: string;
    name: string;
    id: number;
}

type Props = NativeStackScreenProps<StackParams, "Details">

const TaskDetailsScreen: React.FC<Props> = ({ route: { params } }) => {
    const { name, desc, id, category } = params;
    const dispatch = useAppDispatch();

    const [modalVisibility, setMdalVisibility] = useState<boolean>(false)
    const onPressBackButton = () => {
        RootNavigation.goBack()
    }
    const onPressUpdateButton = () => {
        setMdalVisibility(true)
    }
    const onPressDeleteButton = () => {
        Alert.alert('Delete', 'Are you certain you want to delete this item?', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Yes', onPress: ()=> {
                dispatch(deleteCard({ id }));
                onPressBackButton();
            } },
        ]);

    }

    const handleModalOutcome = ({ category: newCategory, description, name, id }: ModalActionProps) => {
        dispatch(updateCard({
            description,
            id,
            name,
            newCategory,
            category
        }))

    }

    const handleModalVisibility = () => {
        setMdalVisibility(false)
    }



    return (
        <SafeAreaView className='flex-1'>
            <View className="flex-1 items-center justify-center bg-white ">
                <View>
                    <Text className='py-10 text-2xl'>Create Task</Text>
                </View>

                <View className='my-4'>
                    <Text className=' text-2xl text-center'>{name}</Text>
                    <Text className=' text-2xl'>{desc}</Text>
                </View>

                <View className='flex-row mt-3'>
                    <ActionButton onPress={onPressBackButton} label={'Cancel'} />
                    <ActionButton onPress={onPressUpdateButton} label={'Update'} />
                    <ActionButton onPress={onPressDeleteButton} label={'Delete'} />
                </View>
                <EditModal
                    visibility={modalVisibility}
                    onUpdated={handleModalOutcome}
                    name={name}
                    id={id}
                    desc={desc}
                    type={category}
                    hideModal={handleModalVisibility}
                />
            </View>
        </SafeAreaView>
    )
}

export default TaskDetailsScreen