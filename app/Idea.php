<?php

namespace IdeaBoard;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    protected $fillable = [
        'title',
        'description',
        'board_id'
    ];

    public function board() {
        return $this->belongsTo('IdeaBoard\Board');
    }
}
