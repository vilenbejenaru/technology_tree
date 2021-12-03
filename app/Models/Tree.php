<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tree extends Model
{
    use HasFactory;
    protected $table = 'tree';
    protected $fillable = ['name', 'http'];

//    public function getTree()
//    {
//        return \DB:select("SELECT name FROM {$this->table}");
//    }
}



