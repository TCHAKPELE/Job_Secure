<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidature;
use App\Models\Mission;
use Carbon\Carbon;

class CandidatureController extends Controller
{

    public function getCandidaturesByFilters($id, $filtre)
    {
        $query = Candidature::query();

        // Filtrer par entreprise si l'ID est fourni
        if ($filtre == "entreprise") {
            $query->where('id_entreprise', $id);
        }

        // Filtrer par offre si l'ID est fourni
        if ($filtre == "offre") {
            $query->where('id_offre', $id);
        }

        // Filtrer par intérimaire si l'ID est fourni
        if ($filtre == "interimaire") {
            $query->where('id_interimaire', $id);
        }

        //Récupération des informations dans les autres tables
        $candidatures = $query->with(['offre', 'entreprise', 'interimaire'])->get();

        // Traiter les détails des relations
        $candidatures->transform(function ($candidature) {
            $candidature->titre_offre = $candidature->offre->titre_offre;
            $candidature->description_offre = $candidature->offre->description_offre;
            $candidature->salaire_offre = $candidature->offre->salaire_offre;
            $candidature->duree_offre = $candidature->offre->duree_offre;
            $candidature->date_creation_offre = $candidature->offre->date_creation;
            $candidature->nom_entreprise = $candidature->entreprise->nom_entreprise;
            $candidature->nom_interimaire = $candidature->interimaire->nom . ' ' . $candidature->interimaire->prenom;

            // Supprimer les relations pour éviter la redondance des données
            unset($candidature->offre);
            unset($candidature->entreprise);
            unset($candidature->interimaire);

            return $candidature;
        });

        return response()->json($candidatures);
    }

    //Accepter candidature
    public function accepterCandidature($idCandidature)
    {
        // Vérifier si la candidature a déjà été acceptée en vérifiant si une mission existe avec l'ID de candidature
        if (Mission::where('id_candidature', $idCandidature)->exists()) {
            return response()->json([
                'status' => 400,
                'message' => 'Cette candidature a déjà été acceptée'
            ]);
        }

        // Trouver la candidature par son ID
        $candidature = Candidature::findOrFail($idCandidature);

        // Mettre à jour le champ status_acceptation à 1
        $candidature->update(['status_acceptation' => 1]);

        // Récupérer l'ID de l'offre et de l'intérimaire associés à la candidature
        $idOffre = $candidature->id_offre;
        $idInterimaire = $candidature->id_interimaire;

        // Récupérer la durée de l'offre en mois
        $dureeOffre = $candidature->offre->duree_offre;
        $id_entreprise = $candidature->offre->id_entreprise;

        // Calculer la date de début (date du jour)
        $dateDebut = Carbon::now()->toDateString();

        // Calculer la date de fin en ajoutant la durée de l'offre à la date de début
        $dateFin = Carbon::now()->addMonths($dureeOffre)->toDateString();

        // Créer une nouvelle mission avec les informations récupérées
        Mission::create([
            'id_offre' => $idOffre,
            'id_interimaire' => $idInterimaire,
            'id_candidature' => $idCandidature,
            'id_entreprise' => $id_entreprise,
            'date_debut' => $dateDebut,
            'date_fin' => $dateFin
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Candidature acceptée et mission créée avec succès'
        ]);
    }
}
