<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Interimaire;
use App\Models\Utilisateur;
class InterimaireController extends Controller
{
    //Liste des interimaires
    public function getInterimaires(){
        
        return Interimaire::all();
    }

    //Récupérer un seul interimaire
    public function getOneInterimaire($id){
        return Interimaire::findOrFail($id);
    }

    //Ajouter un interimaire
    public function addInterimaire(Request $request){

        // Rechercher l'entreprise par email
        
        $existingInterimaire = Interimaire::where('email', $request->email)->first();

        //Vérifier si l'email existe
        if($existingInterimaire){
            return response()->json([
                "status" => 400,
                "message" => "Adresse e-mail déjà utilisée"
            ]);
        }
        //Ajout des données dans la base de données
        $interimaire =Interimaire::create([
            "nom" => $request->nom,
            "prenom" => $request->prenom,
            "email" => $request->email,
            "adresse_interimaire" => $request->adresse_interimaire,
            "telephone_interimaire" => $request->telephone_interimaire
        ]);

        // Hashage du mot de passe
        $hashed_password = Hash::make($request->mot_de_passe);

        // Création de l'utilisateur associé à l'interimaire créé
        $type_utilisateur="interimaire";

        $utilisateur = Utilisateur::create([
            "identifiant" => $request->email,
            "mot_de_passe" => $hashed_password,
            "id_compte" => $interimaire->id,
            "type_utilisateur" => $type_utilisateur
        ]);

       return response()->json([
            'status' => 200,
            'message' => 'Compte bien créé',
            'data' => $interimaire
        ]);
    }

    public function updateInterimaire(Request $request, $id)
    {
        //Rechercher le compte correspondant
        
        $interimaire = Interimaire::find($id);
    
        if (!$interimaire) {
            return response()->json(['message' => 'Interimaire introuvable'], 404);
        }
    
        $interimaire->nom = $request->nom ?? $interimaire->nom;
        $interimaire->prenom = $request->prenom ?? $interimaire->prenom;
        $interimaire->email = $request->email ?? $interimaire->email;
        $interimaire->telephone_interimaire = $request->telephone_interimaire ?? $interimaire->telephone_interimaire;
        $interimaire->adresse_interimaire = $request->adresse_interimaire ?? $interimaire->adresse_interimaire;
        $interimaire->save();
    
        return response()->json(['message' => 'Interimaire mis à jour avec succès', 'data' => $interimaire], 200);
    }

    //Suppression d'un interimaire
    public function deleteInterimaire($id)
    {
        $interimaire = Interimaire::find($id);
    
        if(!$interimaire) {
            return response()->json([
                'message' => 'Interimaire introuvable.'
            ], 404);
        }
    
        $interimaire->delete();
    
        return response()->json([
            'message' => 'Interimaire supprimé avec succès.'
        ], 200);
    }
        
        
}
