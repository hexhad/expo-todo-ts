import { View, Text, SafeAreaView, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParams } from '../MainStack'
import { RootNavigation } from '@/services/RootNavigation'
import EditModal from '@/components/modal/EditModal'
import { deleteCard, updateCard } from '@/redux/slices/todoSlice'
import { useAppDispatch } from '@/redux/store'
import ActionButton from '@/components/buttons/ActionButton'

type ModalActionProps = {
    description: string;
    name: string;
    id: number;
}

type Props = NativeStackScreenProps<StackParams, "Details">

const TaskDetailsScreen: React.FC<Props> = ({ route: { params } }) => {
    const { name, desc, id, category } = params;
    const dispatch = useAppDispatch();

    const [modalVisibility, setMdalVisibility] = useState<boolean>(false);

    const onPressBackButton = (): void => {
        RootNavigation.goBack()
    }

    const onPressUpdateButton = (): void => {
        setMdalVisibility(true)
    }

    const onPressDeleteButton = (): void => {
        Alert.alert('Delete', 'Are you certain you want to delete this item?', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Yes', onPress: () => {
                    dispatch(deleteCard({ id }));
                    onPressBackButton();
                }
            },
        ]);

    }

    const handleModalOutcome = ({ description, name, id }: ModalActionProps): void => {
        dispatch(updateCard({
            description,
            id,
            name,
        }))

    }

    const handleModalVisibility = (): void => {
        setMdalVisibility(false);
        onPressBackButton();

    }


    return (
        <SafeAreaView className={'flex-1'}>
            <View className={"flex-1 items-center justify-center bg-white "}>
                <View>
                    <Text className={'py-10 text-2xl'}>Task details</Text>
                </View>

                <View className={'my-6 mx-6'}>
                    <Text className={'text-2xl text-center'}>{name}</Text>
                    <View className={'p-3 rounded bg-zinc-200 mb-6 h-64 mt-5 w-72'}> 
                        <ScrollView showsVerticalScrollIndicator={false}>
                        <Text className={' text-text-lg'}>{desc}</Text>
                    </ScrollView>

                    </View>
                    <View className={" items-center justify-center bg-white "}><Text>TYPE :  {category}</Text></View>
                   
                </View>

                <View className={'flex-row mt-3'}>
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