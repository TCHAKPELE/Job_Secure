<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $fillable = ['id_interimaire', 'id_mission', 'note'];

    public function interimaire()
    {
        return $this->belongsTo(Interimaire::class, 'id_interimaire');
    }

    public function mission()
    {
        return $this->belongsTo(Mission::class, 'id_mission');
    }
}
