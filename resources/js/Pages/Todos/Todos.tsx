import { PageProps, TodosProps } from "@/types";
import Todo from "@/Components/Todo";

export default function Todos({ auth, todos }: PageProps<TodosProps>) {
    return (
        <ol className='mt-6 max-w-4xl mx-auto bg-white shadow-sm rounded-lg divide-y'>
            {todos.map( todo =>
                <Todo key={todo.id} auth={auth} todo={todo}></Todo> )}
        </ol>
    );
}
