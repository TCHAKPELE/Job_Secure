<?php

namespace App\Models;

use App\Models\Utilisateur;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Interimaire extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'telephone_interimaire',
        'adresse_interimaire'
    ];
    public function utilisateur()
    {
        return $this->hasOne(Utilisateur::class, 'id_compte');
    }

}
