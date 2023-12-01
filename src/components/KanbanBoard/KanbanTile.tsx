import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import { KanbanTileProps } from './types';

const KanbanTile: React.FC<KanbanTileProps> = ({ task }) => {
    console.log(task);

    return (
        <DraxView
            key={task.id}
            dragReleasedStyle={{ opacity: 0 }}
            style={styles.cardContainer}
            dragPayload={task}
            longPressDelay={5}
        >
            <Text style={styles.orange}>{task?.name}</Text>
            <Text style={styles.orange}>{task?.description}</Text>
        </DraxView>
    )
}

export default KanbanTile;

const styles = StyleSheet.create({
    cardContainer: { backgroundColor: '#fff', margin: 10, padding: 10, borderRadius: 3 },
    orange: { color: '#cb3837' }
})