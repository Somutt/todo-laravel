import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Todo {
    id: number;
    text: string;
    done: boolean;
    user_id: number;
    created_at?: Date;
    updated_at?: Date;
}

export type TodosProps = {
    todos: Todo[]
};

export type TodoProps = {
    todo: Todo;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy?: Config & { location: string };
};
