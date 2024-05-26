import { TodosProps } from "@/types";
import Todo from "@/Components/Todo";

export default function Todos({ todos }: TodosProps) {
    return (
        <ol className='mt-6 bg-white shadow-sm rounded-lg divide-y'>
            {todos.map( todo => <li>
                <Todo key={todo.id} todo={todo}></Todo>
            </li> )}
        </ol>
    );
}
