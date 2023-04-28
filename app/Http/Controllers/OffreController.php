<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Offre;
use Illuminate\Support\Facades\Validator;


class OffreController extends Controller
{
    //Récupérations de tous les offres
    public function getOffres()
    {
        return Offre::all();
    
    }

    //Récupérations des offres par entreprise
    public function getOffresByEntreprise($id_entreprise)
    {
        return Offre::where('id_entreprise', $id_entreprise)->get();
    
    }

    //Récupérer une seul offre
    public function getOneOffre($id){
        return Offre::findOrFail($id);
    }

    
    //Ajouter une offre
    public function addOffre(Request $request)
    {
        // Validation des données entrées par l'utilisateur
        $validator = Validator::make($request->all(), [
            'id_entreprise' => 'required|exists:entreprises,id',
            'date_offre' => 'required',
            'titre_offre' => 'required',
            'description_offre' => 'required',
            'duree_offre' => 'required',
            'salaire_offre' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'message' => $validator->errors()
            ]);
        }

        // Création de l'offre dans la base de données
        $offre = Offre::create([
            'id_entreprise' => $request->id_entreprise,
            'date_offre' => $request->date_offre,
            'titre_offre' => $request->titre_offre,
            'description_offre' => $request->description_offre,
            'duree_offre' => $request->duree_offre,
            'salaire_offre' => $request->salaire_offre
        ]);

        return response()->json([
            'status' => '200',
            'message' => 'Offre ajoutée avec succès.',
            'data' => $offre
        ]);
    }    

    //Update offre
    public function updateOffre(Request $request, $id){
        // Rechercher l'offre par ID
        $offre = Offre::find($id);
        
        // Vérifier si l'offre existe
        if(!$offre){
            return response()->json([
                "status" => 400,
                "message" => "Offre introuvable"
            ]);
        }
        
        // Mise à jour de l'offre
        $offre->titre_offre = $request->titre_offre;
        $offre->description_offre = $request->description_offre;
        $offre->date_offre = $request->date_offre;
        $offre->duree_offre = $request->duree_offre;
        $offre->salaire_offre = $request->salaire_offre;
    
        // Enregistrer les modifications dans la base de données
        $offre->save();
    
        return response()->json([
            "status" => 200,
            "message" => "Offre mise à jour avec succès",
            "data" => $offre
        ]);
    }

    //Suppression d'une offre
    public function deleteOffre($id)
    {
        $offre = Offre::find($id);
        
        if (!$offre) {
            return response()->json([
                'status' => 200,
                'message' => 'Offre non trouvée'
            ]);
        }
    
        $offre->delete();
    
        return response()->json([
            'status' => 200,
            'message' => 'Offre supprimée avec succès'
        ]);
    }
    
    
}
