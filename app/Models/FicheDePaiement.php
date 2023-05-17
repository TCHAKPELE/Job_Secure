<?php

namespace App\Models;

use App\Models\Mission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FicheDePaiement extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_mission',
        'montant_paiement',
        'nbr_heure_effectuees'

    ];

    public function mission()
    {
        return $this->belongsTo(Mission::class, 'id_mission');
    }
}
