<?php

namespace App\Models;

use App\Models\Mission;
use App\Models\Entreprise;
use App\Models\Candidature;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Offre extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_entreprise',
        'titre_offre',
        'description_offre',
        'duree_offre',
        'salaire_offre'
    ];


    public function entreprise()
    {
        return $this->belongsTo(Entreprise::class, 'id_entreprise');
    }
    public function candidatures()
    {
        return $this->hasMany(Candidature::class, 'id_offre');
    }
    public function missions()
    {
        return $this->hasMany(Mission::class, 'id_offre');
    }
}
