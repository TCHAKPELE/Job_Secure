<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Entreprise;
use App\Models\Interimaire;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use App\Mail\ValidationCompte;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class AdminController extends Controller
{
     //Liste des interimaires
     public function getAdmins(){
        
        return Utilisateur::all();
    }
    //Compte intérimaire non validé
    public function interimairesNonValides()
    {
        // Récupérer les comptes intérimaires non validés
        $interimaires = Interimaire::select('interimaires.*', 'utilisateurs.id AS id_user')
            ->join('utilisateurs', function ($join) {
                $join->on('interimaires.id', '=', 'utilisateurs.id_compte')
                    ->where('utilisateurs.type_utilisateur', '=', 'interimaire')
                    ->where('utilisateurs.activation_compte', '=', 0);
            })
            ->orderByDesc('interimaires.id')
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
        $entreprises = Entreprise::select('entreprises.*', 'utilisateurs.id AS id_user')
            ->join('utilisateurs', function ($join) {
                $join->on('entreprises.id', '=', 'utilisateurs.id_compte')
                    ->where('utilisateurs.type_utilisateur', '=', 'entreprise')
                    ->where('utilisateurs.activation_compte', '=', 0);
            })
            ->orderByDesc('entreprises.id')
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
        $interimaires = Interimaire::select('interimaires.*', 'utilisateurs.id AS id_user')
        ->join('utilisateurs', function ($join) {
            $join->on('interimaires.id', '=', 'utilisateurs.id_compte')
                ->where('utilisateurs.type_utilisateur', '=', 'interimaire')
                ->where('utilisateurs.activation_compte', '=', 1);
        })
        ->orderByDesc('interimaires.id')
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
        $entreprises = Entreprise::select('entreprises.*', 'utilisateurs.id AS id_user')
            ->join('utilisateurs', function ($join) {
                $join->on('entreprises.id', '=', 'utilisateurs.id_compte')
                    ->where('utilisateurs.type_utilisateur', '=', 'entreprise')
                    ->where('utilisateurs.activation_compte', '=', 1);
            })
            ->orderByDesc('entreprises.id')
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


        if (Mail::to($utilisateur->identifiant)->send(new ValidationCompte())) {
            return response()->json([
                'status' => 200,
                'message' => "Compte validé avec succès et mail envoyé à l'intéressé"
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Compte validé avec succès'
            ]);
        }
    }

    //suppression d'un profil
    public function deleteUser($identifiant)
    {
        $utilisateur = Utilisateur::find($identifiant);
    
        if (!$utilisateur) {
            return response()->json([
                'status' => 400,
                'message' => 'profil introuvable.'
            ]);
        }
    
        $utilisateur->delete();
    
        return response()->json([
            'status' => 200,
            'message' => 'profil supprimé avec succès.'
        ]);
    }
}
