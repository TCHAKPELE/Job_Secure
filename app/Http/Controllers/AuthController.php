<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Interimaire;
use App\Models\Entreprise;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = request(['identifiant', 'mot_de_passe']);
        $user = Utilisateur::where('identifiant', $credentials['identifiant'])->first();
        if (!$user || !Hash::check($credentials['mot_de_passe'], $user->mot_de_passe)) {
            return response()->json([
                'message' => 'Identifiant ou mot de passe incorrecte',
                'status' => 400,
            ]);
        }
        if($user->status_compte == 0 ){
            return response()->json([
                'message' => 'Votre compte a été déscativé',
                'status' => 400,
            ]);
        }
        //Récupération des infos de l'utilisateur
        $type_utilisateur = $user->type_utilisateur;

        if ($type_utilisateur == 'interimaire') {
            $additional_info = Interimaire::find($user->id_compte);
            $user_data=[
                'id_compte' => $user->id_compte,
                'identifiant' => $user->identifiant,
                'mot_de_passe' => $user->mot_de_passe,
                'status_compte' => $user->status_compte,
                'activation_compte' => $user->activation_compte,
                'type_utilisateur' => $user->type_utilisateur,
                'nom' => $additional_info->nom,
                'email' => $additional_info->email,
                'prenom' => $additional_info->prenom,
                'adresse' => $additional_info->adresse_interimaire,
                'telephone' => $additional_info->telephone_interimaire,
           
            ];
        } elseif ($type_utilisateur == 'entreprise') {
            $additional_info = Entreprise::find($user->id_compte);
            $user_data=[
                'id_compte' => $user->id_compte,
                'identifiant' => $user->identifiant,
                'mot_de_passe' => $user->mot_de_passe,
                'status_compte' => $user->status_compte,
                'activation_compte' => $user->activation_compte,
                'type_utilisateur' => $user->type_utilisateur,
                'nom' => $additional_info->nom_entreprise,
                'email' => $additional_info->email,
                'adresse' => $additional_info->adresse_entreprise,
                'telephone' => $additional_info->telephone_entreprise,
           
            ];
        } else {
            $user_data=[
                'id_compte' => $user->id_compte,
                'identifiant' => $user->identifiant,
                'mot_de_passe' => $user->mot_de_passe,
                'status_compte' => $user->status_compte,
                'activation_compte' => $user->activation_compte,
                'type_utilisateur' => $user->type_utilisateur,
                'nom' => "ADMINISTRATEUR",
                
           
            ];
        }

        $tokenResult = $user->createToken('authToken')->plainTextToken;
        $user_data['access_token']= $tokenResult;
        return response()->json([
            'token_type' => 'Bearer',
            'user'=>$user_data,
            'status' => 200,
        ]);
    }

    //Mettre à jour mot de passe
    public function updatePassword(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        
        // Vérifier si l'email existe dans la base de données
        $user = Utilisateur::where('identifiant', $email)->first();
    
        if (!$user) {
            return response()->json([
                'message' => "L'email fourni n'existe pas",
                'status' => 400,
            ]);
        }
    
        // Mettre à jour le mot de passe de l'utilisateur
        $user->mot_de_passe = Hash::make($password);
        $user->save();
    
        return response()->json([
            'message' => "Mot de passe mis à jour avec succès",
            'status' => 200,
        ]);
    }



}
