<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'text' => 'required|string|max:200',
        ]);

        $request->user()->todos()->create([
            'text' => $request->text,
            'done' => false,
        ]);

        return redirect(route('dashboard'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo): RedirectResponse
    {
        Gate::authorize('update', $todo);

        $request->validate([
            'text' => 'required|string|max:200',
        ]);

        $todo->update([
            'text' => $request->text,
            'done' => $request->done,
        ]);

        return redirect(route('dashboard'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo): RedirectResponse
    {
        Gate::authorize('delete', $todo);

        $todo->delete();

        return redirect(route('dashboard'));
    }
}
