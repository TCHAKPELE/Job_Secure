<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Entreprise;
use App\Models\Interimaire;
use App\Models\Offre;

class Candidature extends Model
{
    use HasFactory;

    protected $fillable=[
        'id_entreprise',
        'id_interimaire',
        'id_offre',

    ];
    public function entreprise()
    {
        return $this->belongsTo(Entreprise::class, 'id_entreprise');
    }
    public function interimaire()
    {
        return $this->belongsTo(Interimaire::class, 'id_interimaire');
    }
    
    public function offre()
    {
        return $this->belongsTo(Offre::class, 'id_offre');
    } 

}
