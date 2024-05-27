import { Link, useForm } from "@inertiajs/react";
import { HighlightOff } from "@mui/icons-material";
import { PageProps, TodoProps } from "@/types";

export default function Todo({ auth, todo }: PageProps<TodoProps>) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        text: todo.text,
        done: todo.done
    });

    return (
        <li className="flex items-center justify-between p-6">
            <span>{todo.text}</span>
            {todo.user_id === auth.user.id &&
                <Link href={route('todos.destroy', todo.id)}
                    method="delete" as="button"
                    className="hover:text-red-500">
                    <HighlightOff />
                </Link>
            }
        </li>
    );
}
