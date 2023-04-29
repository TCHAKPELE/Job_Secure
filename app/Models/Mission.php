<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Interimaire;
use App\Models\Offre;

class Mission extends Model
{
    use HasFactory;

    protected $fillable=[
        'id_interimaire',
        'id_offre',
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

}
