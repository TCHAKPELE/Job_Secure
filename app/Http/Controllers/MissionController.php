<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use App\Models\Mission;
use App\Models\Entreprise;
use App\Mail\StatusMission;
use App\Models\Interimaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class MissionController extends Controller
{
    //Récupérations de tous les offres
    public function getMissions()
    {
        $query = Mission::query();

        $missions = $query->with(['offre',  'interimaire','entreprise'])->orderByDesc('id')->get();
        // Traiter les détails des relations
        $missions->transform(function ($mission) {
            $mission->titre_offre = $mission->offre->titre_offre;
            $mission->description_offre = $mission->offre->description_offre;
            $mission->salaire_offre = $mission->offre->salaire_offre;

            $mission->nom_interimaire = $mission->interimaire->nom . ' ' . $mission->interimaire->prenom;
            $mission->nom_entreprise = $mission->entreprise->nom_entreprise;

            // Supprimer les relations pour éviter la redondance des données
            unset($mission->offre);
            unset($mission->entreprise);
            unset($mission->interimaire);

            return $mission;
        });
        return response()->json($missions);
    }

    //Récupérations des Missions par offre
    public function getMissionsByOffre($id_offre)
    {
        $query = Mission::query()->where('id_offre', $id_offre);

        $missions = $query->with(['offre',  'interimaire'])->orderByDesc('id')->get();
        // Traiter les détails des relations
        $missions->transform(function ($mission) {
            $mission->titre_offre = $mission->offre->titre_offre;
            $mission->description_offre = $mission->offre->description_offre;
            $mission->salaire_offre = $mission->offre->salaire_offre;

            $mission->nom_interimaire = $mission->interimaire->nom . ' ' . $mission->interimaire->prenom;
            // Supprimer les relations pour éviter la redondance des données
            unset($mission->offre);
            unset($mission->entreprise);
            unset($mission->interimaire);

            return $mission;
        });
        return response()->json($missions);
    }

    //Récupérations des Missions par offre
    public function getMissionsByEntreprise($id_entreprise)
    {
        $query = Mission::query()->where('id_entreprise', $id_entreprise);

        $missions = $query->with(['offre',  'interimaire'])->orderByDesc('id')->get();
        // Traiter les détails des relations
        $missions->transform(function ($mission) {
            $mission->titre_offre = $mission->offre->titre_offre;
            $mission->description_offre = $mission->offre->description_offre;
            $mission->salaire_offre = $mission->offre->salaire_offre;

            $mission->nom_interimaire = $mission->interimaire->nom . ' ' . $mission->interimaire->prenom;

            // Supprimer les relations pour éviter la redondance des données
            unset($mission->offre);
            unset($mission->entreprise);
            unset($mission->interimaire);

            return $mission;
        });
        return response()->json($missions);
    }

    //Récupérations des Missions par interimaire
    public function getMissionsByInterimaire($id_interimaire)
    {
        $query = Mission::query()->where('id_interimaire', $id_interimaire);

        $missions = $query->with(['offre',  'entreprise'])->orderByDesc('id')->get();
        // Traiter les détails des relations
        $missions->transform(function ($mission) {
            $mission->titre_offre = $mission->offre->titre_offre;
            $mission->description_offre = $mission->offre->description_offre;
            $mission->salaire_offre = $mission->offre->salaire_offre;

            $mission->nom_entreprise = $mission->entreprise->nom_entreprise;

            // Supprimer les relations pour éviter la redondance des données
            unset($mission->offre);
            unset($mission->entreprise);

            return $mission;
        });
        return response()->json($missions);
    }

    //Changer status mission
    public function changerStatusMission($idMission, $status)
    {
        // Vérifier si la mission existe
        $mission = Mission::findOrFail($idMission);

        
        // Mettre à jour le champ status_mission avec la valeur spécifiée
        $mission->update(['status_mission' => $status]);
        
        $message = ($status == 0) ? 'Mission clôturée avec succès' : 'Mission suspendue avec succès';

        //Envoi d'mail
        $status_mission = ($status == 0) ? 'clôturée ' : 'suspendue';

        $entreprise= Entreprise::where('id', $mission->id_entreprise)->first();
        $interimaire= Interimaire::where('id', $mission->id_interimaire)->first();
        $offre= Offre::where('id', $mission->id_offre)->first();

        Mail::to($interimaire->email)->send(new StatusMission([
            "name" => $interimaire->nom." ".$interimaire->prenom,
            "nom_entreprise" => $entreprise->nom_entreprise,
            "titre_offre" => $offre->titre_offre,
            "status_mission" => $status_mission

        ]));
        
        
        return response()->json([
            'status' => 200,
            'message' => $message
        ]);
    }

    //Récupérer une seul Mission
    public function getOneMission($id)
    {
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
    public function updateMission(Request $request, $id)
    {
        // Rechercher l'Mission par ID
        $mission = Mission::find($id);

        // Vérifier si l'offre existe
        if (!$mission) {
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
    
        $candidature = $mission->candidature;
    
        if ($candidature) {
            $candidature->update([
                'status_candidature' => 0
            ]);
        }
    
        $mission->delete();
    
        return response()->json([
            'status' => 200,
            'message' => 'Mission supprimée avec succès'
        ]);
    }
    
}
