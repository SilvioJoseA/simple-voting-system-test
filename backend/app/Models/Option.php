<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = [
        'question_id',
        'title',
        'description',
        'image_url'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}