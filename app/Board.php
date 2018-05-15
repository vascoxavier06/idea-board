<?php

namespace IdeaBoard;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $fillable = [
        'name',
        'user_id'
    ];


    public function user()
    {
        return $this->belongsTo('IdeaBoard\User');
    }

    public function ideas()
    {
        return $this->hasMany('IdeaBoard\Idea');
    }
}
