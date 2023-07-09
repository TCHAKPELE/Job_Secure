<?php

namespace App\Http\Controllers;

use App\Models\Interimaire;
use App\Models\Utilisateur;
use App\Mail\creationCompte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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

         //Vérifier si l'email existe en tant qu'identifiant
         $user_verify = Utilisateur::where('identifiant', $request->email)->first();

         if ($user_verify) {
             return response()->json([
                 'status' => 400,
                 'message' => "Cet identifiant a été déjà attribué à un compte"
             ]); // 400 est le code d'erreur Bad Request
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
                
        //Envoie d'email
        Mail::to($request->email)->send(new creationCompte(["name" => $request->nom." ".$request->prenom]));

       return response()->json([
            'status' => 200,
            'message' => 'Compte bien créé. Nous vous avons envoyé un email!',
            'data' => $interimaire
        ]);
    }

    public function updateInterimaire(Request $request, $id)
    {
        $request->validate([
            'cv' => 'nullable|mimes:pdf|max:2048', // Validation pour les fichiers PDF de taille maximale de 2 Mo
        ]);
    
        $interimaire = Interimaire::find($id);
    
        if (!$interimaire) {
            return response()->json(['status' => 400, 'message' => 'Interimaire introuvable']);
        }
    
        $old_email = $interimaire->email;
        
        $interimaire->nom = $request->nom ?? $interimaire->nom;
        $interimaire->prenom = $request->prenom ?? $interimaire->prenom;
        $interimaire->email = $request->email ?? $interimaire->email;
        $interimaire->iban = $request->iban ?? $interimaire->iban;
        $interimaire->telephone_interimaire = $request->telephone_interimaire ?? $interimaire->telephone_interimaire;
        $interimaire->adresse_interimaire = $request->adresse_interimaire ?? $interimaire->adresse_interimaire;
    
        // Sauvegarde du fichier CV
        if ($request->hasFile('cv')) {
           // Le fichier du CV a été envoyé
            $file = $request->file('cv');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $cvPath = $file->move(public_path('cv'), $fileName);
            $interimaire->cv = $fileName;

        } else {
            // Aucun fichier du CV n'a été envoyé, vous pouvez gérer cette situation en conséquence
            $interimaire->cv = ""; // Ou toute autre logique de gestion
        }
        
    
        $interimaire->save();
    
    
        // Mettre à jour le champ "identifiant" de l'utilisateur
        Utilisateur::where('identifiant', $old_email)
        ->update(['identifiant' => $request->email]);
        return response()->json([
            'status' => 200,
            'message' => 'Interimaire mis à jour avec succès',
            'data' => $interimaire
        ]);
    }
    



    //Suppression d'un interimaire
    public function deleteInterimaire($id)
    {
        $interimaire = Interimaire::find($id);
    
        if (!$interimaire) {
            return response()->json([
                'status' => 400,
                'message' => 'Interimaire introuvable.'
            ]);
        }
    
        $interimaire->delete();
    
        return response()->json([
            'status' => 200,
            'message' => 'Interimaire supprimé avec succès.'
        ]);
    }
        
        
}
