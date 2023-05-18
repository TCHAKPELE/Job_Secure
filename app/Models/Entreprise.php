<?php

namespace App\Models;

use App\Models\Utilisateur;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Entreprise extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_entreprise',
        'email',
        'telephone_entreprise',
        'adresse_entreprise'
    ];

    public function utilisateur()
    {
        return $this->hasOne(Utilisateur::class, 'id_compte');
    }
}
