<?php

namespace IdeaBoard\Http\Controllers\Api;

use Illuminate\Http\Request;
use IdeaBoard\Http\Controllers\Controller;
use IdeaBoard\Board;
Use IdeaBoard\Http\Resources\BoardResource as BResource;
Use Auth;
class BoardsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $boards = Board::where('user_id','=',Auth::id())->get();
        return BResource::collection($boards);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $this->validate(request(),[
            'name' => 'required'
        ]);

        $board = new Board;

        $board->name = request('name');
        $board->user_id = Auth::id();

        $board->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Board::where('user_id','=',Auth::id())->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $board = Board::findOrFail($id);

        if($board->user_id == Auth::id()){
            $this->validate(request(),[
            'name' => 'required'
            ]);
            $board->name = request('name');
            $board->update();
        }else {
            return ['message' => 'Voce nao tem acesso a esse board'];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $board = Board::findOrFail($id);

        if($board->user_id == Auth::id()){
            $board->delete();
        }else {
            return ['message' => 'Voce nao tem acesso a esse board'];
        }
    }
}
