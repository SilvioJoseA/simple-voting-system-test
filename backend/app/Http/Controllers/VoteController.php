<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vote;

class VoteController extends Controller
{
    public function store(Request $request)
    {
        /*
        $request->validate([
            'user_id'=>'required|exists:users,id',
            'question_id'=>'required|exists:questions,id',
            'option_id' => 'required|exists:options,id',
        ]);*/
        try {
            $vote = Vote::create([
                'user_id'=> $request->user_id,
                'question_id'=> $request->question_id,
                'option_id'=> $request->option_id,
            ]);
            return response()->json($vote,201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create vote'], 500);
        }
    }

public function index()
{
    try {
        $votes = Vote::with(['user', 'question', 'option'])->get();
        return response()->json($votes, 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to retrieve votes'], 500);
    }
}
}
