<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;
use App\Models\FicheDePaiement;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Mail\EnvoyerFicheDePaiement;
use Illuminate\Support\Facades\Mail;

class FicheDePaiementController extends Controller
{   //Récupération des fiches de paye
    public function getFicheDePaiement($id, $filtre)
    {
        //Récupérations des infos sur la fiche de paiement, mission, offre , entreprise et interimaire
        $fiches = FicheDePaiement::with(['mission', 'mission.entreprise', 'mission.interimaire', 'mission.offre'])
            ->whereHas('mission', function ($query) use ($id, $filtre) {
                if($filtre == "entreprise")  $query->where('id_entreprise', $id);
                else if($filtre == "interimaire")  $query->where('id_interimaire', $id);
                else $query;
               
            })
            ->get();

        // Traiter les détails des relations
        $fiches->transform(function ($fiche) {

            $fiche->titre_offre = $fiche->mission->offre->titre_offre;
            $fiche->description_offre = $fiche->mission->offre->description_offre;
            $fiche->salaire_offre = $fiche->mission->offre->salaire_offre;
            $fiche->duree_offre = $fiche->mission->offre->duree_offre;
            $fiche->date_creation_offre = $fiche->mission->offre->date_creation;
            $fiche->date_debut_mission = $fiche->mission->date_debut;
            $fiche->date_fin_mission = $fiche->mission->date_fin;
            $fiche->date_fin_mission = $fiche->mission->date_fin;
            $fiche->nom_entreprise = $fiche->mission->entreprise->nom_entreprise;
            $fiche->nom_interimaire = $fiche->mission->interimaire->nom . ' ' . $fiche->mission->interimaire->prenom;

            // Supprimer les relations pour éviter la redondance des données
            unset($fiche->offre);
            unset($fiche->entreprise);
            unset($fiche->interimaire);
            unset($fiche->mission);

            return $fiche;
        });
        return response()->json(
             $fiches
        );
    }
    public function generateFicheDePaiement(Request $request)
    {
        // Récupérer les paramètres de la requête
        $nbr_heures_effectuees = $request->input('nbr_heures_effectuees');
        $id_mission = $request->input('id_mission');

        // Rechercher la mission par son ID
        $mission = Mission::find($id_mission);
        // Vérifier si la mission existe
        if (!$mission) {
            return response()->json([
                'status' => 404,
                'message' => 'Mission introuvable'
            ]);
        }


        // Calculer le montant total de la fiche de paye
        $montant_total = $mission->offre->salaire_offre * $nbr_heures_effectuees;

        // Enregistrer les informations de la fiche de paye dans la table "fiche_de_paye"
        $fiche_generate = FicheDePaiement::create([
            'id_mission' => $mission->id,
            'montant_paiement' => $montant_total,
            'nbr_heure_effectuees' => $montant_total,
        ]);  

        // Générer le contenu du PDF de la fiche de paye
        $pdf = Pdf::loadView('pdf.fiche_de_paiement', [
            'mission' => $mission,
            'nbr_heures_effectuees' => $nbr_heures_effectuees,
            'montant_total' => $montant_total,
        ]);
        $pdf->save(public_path('pdf/fiche_de_paye' . $fiche_generate->id . '.pdf'));
        //Envoie d'email
        Mail::to($mission->interimaire->email)->send(new EnvoyerFicheDePaiement([
            "name" => $mission->interimaire->nom . " " . $mission->interimaire->prenom,
            "id_fiche" => $fiche_generate->id,
            "titre_offre" => $mission->offre->titre_offre,
            "nom_entreprise" => $mission->entreprise->nom_entreprise
        ]));

        return response()->json([
            'status' => 200,
            'message' => 'Fiche de paye générée et envoyée avec succès.',
        ]);
    }
}
