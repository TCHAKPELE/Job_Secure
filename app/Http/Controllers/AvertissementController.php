<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Entreprise;
use App\Models\Interimaire;
use Illuminate\Http\Request;
use App\Mail\avertissementEntreprise;
use App\Mail\avertissementInterimaire;
use Illuminate\Support\Facades\Mail;

class AvertissementController extends Controller
{
    public function avertissementEntreprise(Request $request, $id)
    {
        $entreprise = Entreprise::find($id);

        if (!$entreprise) {
            return response()->json([
                'status' => 400,
                'message' => 'Utilisateur introuvable'
            ]);
        }
        // Envoi de l'avertissement par e-mail 
        $utilisateur = Utilisateur::where('id_compte', $entreprise->id)->where('type_utilisateur', "entreprise")->first();
        Mail::to($utilisateur->identifiant)->send(new AvertissementEntreprise([
            "reponse" => $request->reponse
        ]));

        return response()->json([
            'status' => 200,
            'message' => 'Avertissement envoyé avec succès'
        ]);
    }


    public function avertissementInterimaire(Request $request, $id)
    {
        $interimaire = Interimaire::find($id);

        if (!$interimaire) {
            return response()->json([
                'status' => 400,
                'message' => 'Utilisateur introuvable'
            ]);
        }
        // Envoi de l'avertissement par e-mail 
        $utilisateur = Utilisateur::where('id_compte', $interimaire->id)->where('type_utilisateur', "interimaire")->first();
        Mail::to($utilisateur->identifiant)->send(new avertissementInterimaire([
            "reponse" => $request->reponse
        ]));

        return response()->json([
            'status' => 200,
            'message' => 'Avertissement envoyé avec succès'
        ]);
    }
}
