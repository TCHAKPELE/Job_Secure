<?php

namespace App\Models;

use App\Models\Offre;
use App\Models\Entreprise;
use App\Models\Candidature;
use App\Models\Interimaire;
use App\Models\FicheDePaiement;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    public function fichesDePaiements()
{
    return $this->hasMany(FicheDePaiement::class, 'id_mission');
}


}
