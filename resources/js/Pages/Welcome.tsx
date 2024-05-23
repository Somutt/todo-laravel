import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Welcome" />
            <div className=' flex items-center justify-center min-h-screen bg-sky-900 text-slate-200'>
                <main className='flex flex-col items-center'>
                    <h1 className='text-6xl font-extrabold'>todo-list</h1>
                    <h2 className='text-2xl'>
                        The <span>simplest</span> and the <span className='underline'>best</span>
                    </h2>
                    <section className="p-10">
                        <nav className="flex flex-1">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-2 py-1 mr-1"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-3 py-2 mr-2 rounded-full border-2"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-3 py-2 ml-2 rounded-full border-2"
                                    >
                                        Sign up
                                    </Link>
                                </>
                            )}
                        </nav>
                    </section>
                </main>
            </div>
        </>
    );
}
