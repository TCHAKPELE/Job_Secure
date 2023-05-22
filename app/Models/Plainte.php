<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plainte extends Model
{
    use HasFactory;
    protected $table = 'plaintes';

    protected $fillable = [
        'id_compte',
        'type_utilisateur',
        'motif',
        'description',
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'id_compte', 'id_compte');
    }
}
