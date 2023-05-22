<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Offre;

use App\Models\Entreprise;
use App\Models\Interimaire;
use Illuminate\Http\Request;
use App\Mail\SuppressionOffre;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;


class OffreController extends Controller
{
    //Récupérations de tous les offres
    public function getOffres()
    {
        $query = Offre::query();
        //Récupération des informations dans les autres tables
        $offres = $query->with(['entreprise'])->withCount('candidatures')
            ->orderByDesc('id')->get();

        // Traiter les détails des relations
        $offres->transform(function ($offre) {
            $offre->nom_entreprise = $offre->entreprise->nom_entreprise;
            // Supprimer les relations pour éviter la redondance des données
            unset($offre->entreprise);
            return $offre;
        });
        return response()->json($offres);
    }

    //Récupérations des offres par entreprise
    public function getOffresByEntreprise($id_entreprise)
    {
        //Liste des offres avec nombre de candidature
        return Offre::where('id_entreprise', $id_entreprise)
            ->withCount('candidatures')
            ->orderByDesc('id')
            ->get();
    }


    //Récupérer une seul offre
    public function getOneOffre($id)
    {
        return Offre::findOrFail($id);
    }


    //Ajouter une offre
    public function addOffre(Request $request)
    {
        // Validation et vérification de l'id entreprise envoyé
        $validator = Validator::make($request->all(), [
            'id_entreprise' => 'required|exists:entreprises,id',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'message' => "Cette entreprise n'existe pas"
            ]);
        }

        // Création de l'offre dans la base de données
        $offre = Offre::create([
            'id_entreprise' => $request->id_entreprise,
            'titre_offre' => $request->titre_offre,
            'description_offre' => $request->description_offre,
            'duree_offre' => $request->duree_offre,
            'salaire_offre' => $request->salaire_offre
        ]);

        $offre['candidatures_count'] = 0;

        $dateDuJour = Carbon::now()->toDateString();

        // Format personnalisé
        $dateDuJour = Carbon::now()->format('Y-m-d');
        $offre['date_creation'] = $dateDuJour;

        return response()->json([
            'status' => '200',
            'message' => 'Offre ajoutée avec succès.',
            'data' => $offre
        ]);
    }

    //Update offre
    public function updateOffre(Request $request, $id)
    {
        // Rechercher l'offre par ID
        $offre = Offre::find($id);

        // Vérifier si l'offre existe
        if (!$offre) {
            return response()->json([
                "status" => 400,
                "message" => "Offre introuvable"
            ]);
        }

        // Mise à jour de l'offre
        $offre->titre_offre = $request->titre_offre;
        $offre->description_offre = $request->description_offre;
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

        

        // Récupérer les missions liées à l'offre
        $missions = $offre->missions;

        if ($missions !== null) {
            // Supprimer les enregistrements dans la table fiche_de_paiements pour chaque mission
            foreach ($missions as $mission) {
                $fichePaiements = $mission->fichesDePaiements;
                if ($fichePaiements !=null){
                    foreach ($fichePaiements as $fichePaiement) {
                        $fichePaiement->delete();
                    }
                }
                //Notifier l'intérimaire
                $interimaire= Interimaire::where('id', $mission->id_interimaire)->first();
                Mail::to($interimaire->email)->send(new SuppressionOffre([
                    "name" => $interimaire->nom." ".$interimaire->prenom,
                    "titre_offre" => $offre->titre_offre,
                ]));

                $mission->fichesDePaiements()->delete();
                $mission->delete();
            }
        }

        //Notifier l'entreprise
        $entreprise= Entreprise::where('id', $offre->id_entreprise)->first();
        
        Mail::to($entreprise->email)->send(new SuppressionOffre([
            "name" => $entreprise->nom_entreprise,
            "titre_offre" => $offre->titre_offre,
        ]));

        // Supprimer les candidatures liées à l'offre
        $offre->candidatures()->delete();

        // Supprimer l'offre
        $offre->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Offre supprimée avec succès'
        ]);
    }
}
