<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Entreprise;
use App\Models\Interimaire;
use App\Models\Offre;

class Admin extends Model
{
    use HasFactory;

    protected $fillable=[
        "status_compte"

    ];
    public function entreprise()
    {
        return $this->belongsTo(Entreprise::class, 'id_compte');
    }
    public function interimaire()
    {
        return $this->belongsTo(Interimaire::class, 'id_compte');
    }
    
    public function offre()
    {
        return $this->belongsTo(Offre::class, 'id_offre');
    } 



}
