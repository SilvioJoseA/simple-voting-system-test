<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Option;
class OptionController extends Controller
{
    public function index()
    {
        try {
            $options = Option::all();
            return response()->json($options, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve options'], 500);
        }

    }

    public function store( Request $request )
    {
       try {
            $option = Option::create([
                'question_id'=> $request->question_id,
                'title'=> $request->title,
                'description'=> $request->description,
                'image_url'=> $request->image_url,
            ]);
            return response()->json($option,201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create option'], 500);
    }
        
    }

    public function show($id)
    {   
        try {
            $option = Option::findOrFail($id);
            return response()->json($option);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Option not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve option'], 500);
        }
        
    }

    public function update(Request $request , $id )
    {
        try {
            $option = Option::findOrFail($id);
            $option->update([
                'question_id'=> $request->question_id,
                'title'=> $request->title,
                'description'=> $request->description,
                'image_url'=> $request->image_url,
            ]);
        return response()->json($option,201);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Option not found'], 404);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update option'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $option = Option::findOrFail($id);
            $option->delete();
            return response()->noContent();
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Option not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete option'], 500);
        }
    }
}
