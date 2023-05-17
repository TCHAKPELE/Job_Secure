<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Utilisateur extends  Authenticatable
{
    protected $table = 'utilisateurs';

    use   HasApiTokens, HasFactory, Notifiable;
    protected $fillable = [
        'id_compte',
        'identifiant',
        'mot_de_passe',
        'type_utilisateur',
        'status_compte',
        'activation_compte',
    ];
    
}
