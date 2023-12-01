import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import KanbanTile from './KanbanTile';
import { nanoid } from '@reduxjs/toolkit';
import { DraxWrapperProps, KanbanBoardProps, RenderKanbanTilesProps } from './types';

const RenderKanbanTiles: React.FC<RenderKanbanTilesProps> = ({ tasks = [] }) => {
    return tasks.map((task, index) => <KanbanTile  {...{ task }} />)
}
const DraxWrapper: React.FC<DraxWrapperProps> = ({ children, onUpdate, data }) => {
    const onReceivedItem = ({ dragged: { payload } }: { dragged: { payload: any; }; }) => {
        onUpdate({ child: payload, parent: data });
    }
    const key = nanoid();
    return <DraxView
        key={key}
        style={styles.flex}
        onReceiveDragDrop={onReceivedItem}
    >
        {children}
    </DraxView>
}
const KanbanBoard: React.FC<KanbanBoardProps> = ({ data = [], onUpdate }) => {

    return (
        <DraxProvider style={styles.flex}>
            <DraxScrollView contentContainerStyle={styles.draxScrollView} horizontal>
                {data.map(({ name, id, rows }, index) => {
                    return (
                        <View style={styles.mainContainer}>
                            <DraxWrapper onUpdate={onUpdate} data={{ name, id }}>
                                <Text>{name}</Text>
                                <RenderKanbanTiles {...{ tasks: rows }} />
                            </DraxWrapper>
                        </View>
                    )
                })}
            </DraxScrollView>
        </DraxProvider >
    )
}

export default KanbanBoard

const styles = StyleSheet.create({
    draxScrollView: { flexDirection: 'row' },
    mainContainer: { width: 300, backgroundColor: 'gray', marginRight: 10, height: 500 },
    flex: { flex: 1 }
})