import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import { nanoid } from '@reduxjs/toolkit';
import KanbanTile from './KanbanTile';
import { DraxWrapperProps, KanbanBoardProps, RenderKanbanTilesProps } from './types';

const RenderKanbanTiles: React.FC<RenderKanbanTilesProps> = ({ tasks = [], onPressItem }) => {
    return tasks.map((task) => <KanbanTile onPressItem={() => onPressItem({ task })} {...{ task }} key={task.id} />)
}

const DraxWrapper: React.FC<DraxWrapperProps> = ({ children, onUpdate, data }) => {
    const onReceivedItem = ({ dragged: { payload } }: { dragged: { payload: any; }; }) => {
        onUpdate({ child: payload, parent: data });
    }
    const key = nanoid();
    return <DraxView
        key={key}
        style={[styles.flex]}
        onReceiveDragDrop={onReceivedItem}
    >
        {children}
    </DraxView>
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ data = [], onUpdate, onPressItem }) => {
    return (
        <DraxProvider style={styles.flex}>
            <DraxScrollView contentContainerStyle={styles.draxScrollView} horizontal>
                {data.map(({ tasks, category }, index) => {
                    return (
                        <View style={styles.mainContainer} key={index}>
                            <DraxWrapper onUpdate={onUpdate} data={{ category }}>

                                <Text className='text-red-200 text-lg'>{category}</Text>
                                <ScrollView className='bg-gray-900 rounded flex-1 mt-2'>
                                    <RenderKanbanTiles onPressItem={onPressItem} {...{ tasks }} />
                                </ScrollView>
                            </DraxWrapper>
                        </View>
                    )
                })}
            </DraxScrollView>
        </DraxProvider >
    )
}

export default memo(KanbanBoard)

const styles = StyleSheet.create({
    draxScrollView: { flexDirection: 'row' },
    mainContainer: {
        width: 300,
        backgroundColor: '#374151',
        marginRight: 10,
        flex: 1,
        padding: 10,
    },
    flex: { flex: 1 }
})