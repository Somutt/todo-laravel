import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { HighlightOff, CheckCircleOutlined, ModeEdit } from "@mui/icons-material";
import { PageProps, TodoProps } from "@/types";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";

dayjs.extend(relativeTime);

export default function Todo({ auth, todo }: PageProps<TodoProps>) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        text: todo.text,
        done: !!todo.done
    });

    const [editing, setEditing] = useState(false);

    const submit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        patch(route('todos.update', todo.id), { onSuccess: () => setEditing(false) })
    }

    const handleDoneClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setData('done', !data.done);

        patch(route('todos.update', todo.id));
    }

    return (
        <li className="flex p-6 flex-col">
            <div className="flex justify-items-start items-center">
                <span className='text-gray-800'>{auth.user.name}</span>
                <small className='ml-2 text-sm text-gray-600'>{ dayjs(todo.created_at).fromNow() }</small>
            </div>
            <div className=" flex items-center justify-between ml-2">
                {editing ?
                    <form onSubmit={submit}>
                        <textarea
                            className='mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                            value={data.text} onChange={e => setData('text', e.target.value)}>
                        </textarea>
                        <InputError message={errors.text} className='mt-2'/>
                        <div className='space-x-2'>
                            <PrimaryButton className='mt-4'>Save</PrimaryButton>
                            <button
                                className='mt-4'
                                onClick={() => { setEditing(false); reset('text'); clearErrors(); } }>
                                Cancel
                            </button>
                        </div>
                    </form>
                    :
                    <>
                        <span className={`${todo.done ? 'line-through' : ''}`}>{todo.text}</span>
                        <button
                            onClick={() => setEditing(true)}
                            className="hover:text-green-700">
                            <ModeEdit />
                        </button>
                    </>
                }
                {todo.user_id === auth.user.id &&
                    <div>
                        <button onClick={handleDoneClick}
                            value={Number(data.done)}
                            className={`hover:text-green-500 ${todo.done ? 'text-green-500' : ''} disabled:hover:text-black`}
                            disabled={editing}>
                            <CheckCircleOutlined />
                        </button>
                        <Link href={route('todos.destroy', todo.id)}
                            method="delete" as="button"
                            className="ml-1 hover:text-red-500">
                            <HighlightOff />
                        </Link>
                    </div>
                }
            </div>
        </li>
    );
}
