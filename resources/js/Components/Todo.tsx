import { TodoProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";

export default function Todo({ todo }: TodoProps) {
    const { auth } = usePage().props;

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        text: todo.text,
        done: todo.done
    });

    return (
        <section className="flex p-6">
            {todo.text}
        </section>
    );
}
