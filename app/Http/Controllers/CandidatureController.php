<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidature;

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
    
}
