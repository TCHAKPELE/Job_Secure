<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mission;
use Illuminate\Support\Facades\Validator;
class MissionController extends Controller
{
    //Récupérations de tous les offres
    public function getMissions()
    {
        return Mission::all();
    
    }

    //Récupérations des Missions par offre
    public function getMissionsByOffre($id_offre)
    {
        return Mission::where('id_offre', $id_offre)->get();
    
    }

    //Récupérations des Missions par interimaire
    public function getMissionsByInterimaire($id_interimaire)
    {
        return Mission::where('id_interimaire', $id_interimaire)->get();
    
    }

    //Récupérer une seul Mission
    public function getOneMission($id){
        return Mission::findOrFail($id);
    }

    
    //Ajouter une mission
    public function addMission(Request $request)
    {
        // Validation et vérification de l'id interimaire et offre envoyé
        $validator = Validator::make($request->all(), [
            'id_offre' => 'required|exists:offres,id',
            'id_interimaire' => 'required|exists:interimaires,id',
   
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'message' => $validator->errors()
            ]);
        }

        // Création de la mission dans la base de données
        $mission = Mission::create([
            'id_interimaire' => $request->id_interimaire,
            'id_offre' => $request->id_offre,
            'date_debut' => $request->date_debut,
            'date_fin' => $request->date_fin
        ]);

        return response()->json([
            'status' => '200',
            'message' => 'Mission ajoutée avec succès.',
            'data' => $mission
        ]);
    }    


    //Update Mission
    public function updateMission(Request $request, $id){
        // Rechercher l'Mission par ID
        $mission = Mission::find($id);
        
        // Vérifier si l'offre existe
        if(!$mission){
            return response()->json([
                "status" => 400,
                "message" => "Offre introuvable"
            ]);
        }
        
        // Mise à jour de la mission
        $mission->id_interimaire = $request->id_interimaire;
        $mission->id_offre = $request->id_offre;
        $mission->date_debut = $request->date_debut;
        $mission->date_fin = $request->date_fin;
    
        // Enregistrer les modifications dans la base de données
        $mission->save();
    
        return response()->json([
            "status" => 200,
            "message" => "Mission mise à jour avec succès",
            "data" => $mission
        ]);
    }

    //Suppression d'une mission
    public function deleteMission($id)
    {
        $mission = Mission::find($id);
        
        if (!$mission) {
            return response()->json([
                'status' => 200,
                'message' => 'Mission non trouvée'
            ]);
        }
    
        $mission->delete();
    
        return response()->json([
            'status' => 200,
            'message' => 'Mission supprimée avec succès'
        ]);
    }    
}
