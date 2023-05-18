<?php

namespace App\Models;

use App\Models\Offre;
use App\Models\Mission;
use App\Models\Entreprise;
use App\Models\Interimaire;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Candidature extends Model
{
    use HasFactory;

    protected $fillable=[
        'id_entreprise',
        'id_interimaire',
        'id_offre',
        'status_acceptation'

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

    public function missions()
{
    return $this->hasMany(Mission::class, 'id_candidature');
}

}
