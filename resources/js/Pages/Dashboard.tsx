import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { FormEventHandler } from 'react';

export default function Dashboard({ auth }: PageProps) {
    const { data, setData, post, processing, reset, errors } = useForm({
        text: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('todos.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Viewing your List</h2>}
        >
            <Head title="Dashboard" />
            <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8'>
                <form onSubmit={submit}>
                    <textarea
                        value={data.text}
                        placeholder="What's for you to do?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('text', e.target.value)}
                    ></textarea>
                    <InputError message={errors.text} className='mt-2'/>
                    <PrimaryButton className='mt-4' disabled={processing}>Add Task</PrimaryButton>
                </form>
            </div>

        </AuthenticatedLayout>
    );
}
