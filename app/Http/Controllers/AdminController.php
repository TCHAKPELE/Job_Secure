<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Entreprise;
use App\Models\Interimaire;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use App\Mail\ValidationCompte;
use Illuminate\Support\Facades\Mail;

class AdminController extends Controller
{
    //Compte intérimaire non validé
    public function interimairesNonValides()
    {
        // Récupérer les comptes intérimaires non validés
        $interimaires = Interimaire::join('utilisateurs', 'interimaires.id', '=', 'utilisateurs.id_compte')
            ->where('utilisateurs.activation_compte', 0)
            ->orderByDesc('utilisateurs.id_compte')
            ->get();

        // Retourner les comptes intérimaires non validés en tant que réponse JSON
        return response()->json(
            $interimaires
        );
    }

    //Compte entreprise non validé
    public function entreprisesNonValides()
    {
        // Récupérer les comptes entreprises non validés
        $entreprises = Entreprise::join('utilisateurs', 'entreprises.id', '=', 'utilisateurs.id_compte')
            ->where('utilisateurs.activation_compte', 0)
            ->orderByDesc('utilisateurs.id_compte')
            ->get();

        // Retourner les comptes entreprises non validés en tant que réponse JSON
        return response()->json(
             $entreprises
        );
    }

    //Compte intérimaire  validé
    public function interimairesValides()
    {
        // Récupérer les comptes intérimaires validés
        $interimaires = Interimaire::join('utilisateurs', 'interimaires.id', '=', 'utilisateurs.id_compte')
            ->where('utilisateurs.activation_compte', 1)
            ->orderByDesc('utilisateurs.id_compte')
            ->get();

        // Retourner les comptes intérimaires validés en tant que réponse JSON
        return response()->json(
             $interimaires
        );
    }

    //Compte intérimaire non validé
    public function entreprisesValides()
    {
        // Récupérer les comptes entreprises validés
        $entreprises = Entreprise::join('utilisateurs', 'entreprises.id', '=', 'utilisateurs.id_compte')
            ->where('utilisateurs.activation_compte', 1)
            ->orderByDesc('utilisateurs.id_compte')
            ->get();

        // Retourner les comptes entreprises validés en tant que réponse JSON
        return response()->json(
             $entreprises
        );
    }



    public function validerCompte(Request $request)
    {
        // Récupérer l'ID de l'utilisateur
        $id_utilisateur = $request->input('id_utilisateur');

        // Rechercher l'utilisateur par son ID
        $utilisateur = Utilisateur::find($id_utilisateur);

        // Vérifier si l'utilisateur existe
        if (!$utilisateur) {
            return response()->json([
                'status' => 404,
                'message' => 'Utilisateur introuvable'
            ]);
        }

        // Valider le compte en mettant à jour le champ activation_compte à 1
        $utilisateur->update(['activation_compte' => 1]);
        
        //Envoie d'email
        Mail::to($utilisateur->identifiant)->send(new ValidationCompte());

        return response()->json([
            'status' => 200,
            'message' => 'Compte validé avec succès'
        ]);
    }
}
