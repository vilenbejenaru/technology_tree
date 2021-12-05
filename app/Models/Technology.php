<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Technology extends Model
{
    use HasFactory;
    protected $table = 'technology';

    public function getRouteKeyName()
    {
        return 'name';
    }

//    public function category(): BelongsTo
//    {
//        return $this->belongsTo(Category::class, 'category_id', 'id');
//    }

    public function video() : HasMany
    {
        return $this->hasMany(Video::class, 'technology_id', 'id');
//        dd('sssssss');
    }

}
