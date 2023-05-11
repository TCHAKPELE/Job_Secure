<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Interimaire;
use App\Models\Offre;
use App\Models\Candidature;
use App\Models\Entreprise;

class Mission extends Model
{
    use HasFactory;

    protected $fillable=[
        'id_interimaire',
        'id_offre',
        'id_candidature',
        'id_entreprise',
        'status_mission',
        'date_debut',
        'date_fin'
    ];
    public function interimaire()
    {
        return $this->belongsTo(Interimaire::class, 'id_interimaire');
    }
    
    public function offre()
    {
        return $this->belongsTo(Offre::class, 'id_offre');
    }
    
    public function candidature()
    {
        return $this->belongsTo(Candidature::class, 'id_candidature');
    }
    public function entreprise()
    {
        return $this->belongsTo(Entreprise::class, 'id_entreprise');
    }

}
