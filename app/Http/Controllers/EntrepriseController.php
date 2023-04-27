<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Entreprise;
use App\Models\Utilisateur;
class EntrepriseController extends Controller
{
    //Liste des Entreprises
    public function getEntreprises(){

        return Entreprise::all();
    }

    //Récupérer un seul Entreprise
    public function getOneEntreprise($id){
        return Entreprise::findOrFail($id);
    }

    //Ajouter un entreprise
    public function addentreprise(Request $request){

        // Rechercher l'entreprise par email
        $entreprise = Entreprise::where('email', $request->email)->first();

        // Vérifier si l'entreprise existe déjà avec cet email
        if ($entreprise) {
            return response()->json([
                'error' => 'L\'email de l\'entreprise existe déjà.'
            ], 400); // 400 est le code d'erreur Bad Request
        }

        // Créer une nouvelle entreprise
        $newEntreprise = Entreprise::create([
            'nom_entreprise' => $request->nom_entreprise,
            'email' => $request->email,
            'adresse_entreprise' => $request->adresse_entreprise,
            'telephone_entreprise' => $request->telephone_entreprise
        ]);

        // Hashage du mot de passe
        $hashed_password = Hash::make($request->mot_de_passe);

        // Création de l'utilisateur associé à l'interimaire créé
        $type_utilisateur="entreprise";

        $utilisateur = Utilisateur::create([
            "identifiant" => $request->email,
            "mot_de_passe" => $hashed_password,
            "id_compte" => $newEntreprise->id,
            "type_utilisateur" => $type_utilisateur
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Compte bien créé',
            'data' =>$newEntreprise
        ]);

    }    

    //Mise à jour d'une entreprise
    public function updateentreprise(Request $request, $id)
    {
        //Rechercher le compte correspondant
        
        $entreprise = Entreprise::find($id);
    
        if (!$entreprise) {
            return response()->json(['message' => 'Entreprise introuvable'], 404);
        }
    
        $entreprise->nom_entreprise = $request->nom_entreprise ?? $entreprise->nom_entreprise;
        $entreprise->email = $request->email ?? $entreprise->email;
        $entreprise->telephone_entreprise = $request->telephone_entreprise ?? $entreprise->telephone_entreprise;
        $entreprise->adresse_entreprise = $request->adresse_entreprise ?? $entreprise->adresse_entreprise;
        $entreprise->save();
    
        return response()->json(['message' => 'Entreprise mis à jour avec succès', 'data' => $entreprise], 200);
    }

    //Suppression d'une Entreprise
    public function deleteEntreprise($id)
    {
        $entreprise = Entreprise::find($id);
    
        if(!$entreprise) {
            return response()->json([
                'message' => 'Entreprise introuvable.'
            ], 404);
        }
    
        $entreprise->delete();
    
        return response()->json([
            'message' => 'Entreprise supprimé avec succès.'
        ], 200);
    }    
}
