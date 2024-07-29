<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        try {
            $questions = Question::all();
            return response()->json($questions, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve questions'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            /*  $request->validate([
            'title'=>'required|string',
            'identifier'=>'required|string|unique:questions',
            'boolean'=>'boolean',
        ]);*/
            $response = Question::create([
                'title'=> $request->title,
                'identifier'=> $request->identifier,
                'boolean' => $request->boolean,
            ]);
            return response()->json($response,201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create question'], 500);
        }
    
    }

    public function show($id)
    {
        try {
            $question = Question::findOrFail($id);
            return response()->json($question, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Question not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve question'], 500);
        }
    }

    public function update(Rrequest $request , $id )
    {
        try {
            $question = Question::findOrFail($id);
            $question->update([
                'title'=> $request->title,
                'identifier'=> $request->identifier,
                'boolean' => $request->boolean,
            ]);
        return response()->json($request,201);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Question not found'], 404);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update question'], 500);
    }
        
    }

    public function destroy($id)
    {
        try {
            $question = Question::findOrFail($id);
            $question->delete();
            return response()->noContent();
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Question not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete question'], 500);
        }
    }
}
