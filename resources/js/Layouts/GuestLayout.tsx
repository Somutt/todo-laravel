import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-sky-900">
            <div>
                <Link href="/">
                    <h1 className='text-4xl text-slate-200 font-extrabold'>todo-list</h1>
                </Link>
            </div>

            <div className="w-full max-w-md mt-6 px-6 py-4 bg-slate-200 overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
