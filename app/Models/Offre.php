<?php

namespace App\Models;

use App\Models\Entreprise;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Offre extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_entreprise',
        'date_offre',
        'titre_offre',
        'description_offre',
        'duree_offre',
        'salaire_offre'
    ];


    public function entreprise()
    {
        return $this->belongsTo(Entreprise::class, 'id_entreprise');
    }    
}
