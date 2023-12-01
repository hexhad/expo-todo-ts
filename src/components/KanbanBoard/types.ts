import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { DraxProvider, DraxView, DraxScrollView } from 'react-native-drax';
import KanbanTile from './KanbanTile';
import { nanoid } from '@reduxjs/toolkit';

export type RenderKanbanTilesProps = {
    tasks: [];
}
export type KanbanBoardProps = PropsWithChildren & {
    data: [];
    onUpdate: (payload: any) => any;
}
export type DraxWrapperProps = PropsWithChildren & {
    onUpdate: (payload: any) => any;
    data:{},
}
export type KanbanTileProps = {
    task: {
     id: string | number;
     title?: string | undefined;
 };
}

 