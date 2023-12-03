import { TodoType } from "@/redux/slices/todoSlice";
import Realm from "realm";
Realm.Object
export class Todo extends Realm.Object<TodoType> {
    id!: string;
    value!: string;
    static schema: Realm.ObjectSchema = {
        name: 'Data',
        properties: {
            id: 'string',
            value: 'string',
        },
        
    };
}



