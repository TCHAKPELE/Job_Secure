<?php

namespace App\Http\Controllers;

use App\Mail\creationCompte;
use App\Mail\ValidationCompte;
use App\Models\Entreprise;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class EntrepriseController extends Controller
{
    //Liste des Entreprises
    public function getEntreprises()
    {

        return Entreprise::all();
    }

    //Récupérer un seul Entreprise
    public function getOneEntreprise($id)
    {
        return Entreprise::findOrFail($id);
    }

    //Ajouter un entreprise
    public function addEntreprise(Request $request)
    {

        // Rechercher l'entreprise par email
        $entreprise = Entreprise::where('email', $request->email)->first();

        // Vérifier si l'entreprise existe déjà avec cet email
        if ($entreprise) {
            return response()->json([
                'status' => 400,
                'message' => 'L\'email de l\'entreprise existe déjà.'
            ]); // 400 est le code d'erreur Bad Request
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
        $type_utilisateur = "entreprise";

        $utilisateur = Utilisateur::create([
            "identifiant" => $request->email,
            "mot_de_passe" => $hashed_password,
            "id_compte" => $newEntreprise->id,
            "type_utilisateur" => $type_utilisateur
        ]);

        //Envoie d'email
        Mail::to($request->email)->send(new creationCompte(["name" => $request->nom_entreprise]));

        return response()->json([
            'status' => 200,
            'message' => 'Compte bien créé. Nous vous avons envoyé un email!',
            'data' => $newEntreprise
        ]);
    }

    //Mise à jour d'une entreprise
    public function updateEntreprise(Request $request, $id)
    {
        //Rechercher le compte correspondant

        $entreprise = Entreprise::find($id);

        if (!$entreprise) {
            return response()->json(['status' => 400, 'message' => 'Entreprise introuvable']);
        }

        $new_email = $entreprise->email; // L'ancienne valeur de l'email
        $entreprise->nom_entreprise = $request->nom_entreprise ?? $entreprise->nom_entreprise;
        $entreprise->email = $request->email ?? $entreprise->email;
        $entreprise->telephone_entreprise = $request->telephone_entreprise ?? $entreprise->telephone_entreprise;
        $entreprise->adresse_entreprise = $request->adresse_entreprise ?? $entreprise->adresse_entreprise;
        $entreprise->save();

        // Mettre à jour le champ "identifiant" de l'utilisateur
        Utilisateur::where('identifiant', $new_email)
            ->update(['identifiant' => $request->email]);

        return response()->json(
            [
                'status' => 200,
                'message' => 'Entreprise mis à jour avec succès',
                'data' => $entreprise
            ]
        );
    }

    //Suppression d'une Entreprise
    public function deleteEntreprise($id)
    {
        $entreprise = Entreprise::find($id);

        if (!$entreprise) {
            return response()->json([
                'status' => 400,
                'message' => 'Entreprise introuvable.'
            ]);
        }

        $entreprise->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Entreprise supprimé avec succès.'
        ]);
    }
}
