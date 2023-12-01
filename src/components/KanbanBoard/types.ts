import type { PropsWithChildren } from 'react'

export type RenderKanbanTilesProps = {
    tasks: {id:number}[];
}
export type KanbanBoardProps = PropsWithChildren & {
    data: { tasks: any, category: any }[];
    onUpdate: (payload: any) => any;
}
export type DraxWrapperProps = PropsWithChildren & {
    onUpdate: (payload: any) => any;
    data: {},
}
export type KanbanTileProps = {
    task: {
        id: string | number;
        name?: string | undefined;
        description?:string | undefined;
    };
}

