<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'title',
        'identifier',
        'is_active',
    ];

    public function options()
    {
        return $this->hasMany(Option::class);
    }

}
