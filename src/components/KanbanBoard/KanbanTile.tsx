import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { DraxView } from 'react-native-drax';
import { KanbanTileProps } from './types';

const KanbanTile: React.FC<KanbanTileProps> = ({ task, onPressItem }) => {
    return (
        <DraxView
            key={task.id}
            dragReleasedStyle={{ opacity: 0 }}
            draggingStyle={{ opacity: 0 }}
            draggingWithReceiverStyle={{ opacity: 0 }}
            hoverDraggingStyle={{
                transform: [{ rotateZ: '-0.2rad' }],
            }}
            style={styles.cardContainer}
            dragPayload={task}
            longPressDelay={500}
        >
            <TouchableOpacity onPress={onPressItem}>
                <Text style={styles.orange}>{task?.name}</Text>
                <Text style={styles.orange}>{task?.description}</Text>
            </TouchableOpacity>
        </DraxView>
    )
}

export default memo(KanbanTile);

const styles = StyleSheet.create({
    cardContainer: { backgroundColor: '#fff', margin: 10, padding: 10, borderRadius: 3, maxHeight: 200, overflow: 'hidden' },
    orange: { color: '#cb3837' }
})