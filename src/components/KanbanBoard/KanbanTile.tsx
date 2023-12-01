import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import { KanbanTileProps } from './types';

const KanbanTile: React.FC<KanbanTileProps> = ({ task }) => {
    return (
        <DraxView
            key={task.id}
            dragReleasedStyle={{ opacity: 0 }}
            style={{ backgroundColor: 'pink', width: 100, height: 100, margin: 10 }}
            onDragStart={() => {
                console.log('start drag');
            }}
            dragPayload={task}
        >
            <Text>{task?.title}</Text>
        </DraxView>
    )
}

export default KanbanTile