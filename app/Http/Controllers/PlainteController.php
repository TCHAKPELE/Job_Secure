<?php

namespace App\Http\Controllers;

use App\Models\Plainte;
use App\Models\Entreprise;
use App\Models\Interimaire;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use App\Mail\ReceptionPlainte;
use App\Mail\ReponsePlainte;
use Illuminate\Support\Facades\Mail;

class PlainteController extends Controller
{
    public function afficherPlaintes()
    {
        $plaintes = Plainte::orderByDesc('id')->get();
        $plaintesAvecNom = [];

        if (!$plaintes->isEmpty()) {
            foreach ($plaintes as $plainte) {
                $utilisateur = Utilisateur::where('id_compte', $plainte->id_compte)->first();

                if (!$utilisateur) {
                    return response()->json([
                        'status' => 400,
                        'message' => 'Utilisateur introuvable'
                    ]);
                }

                $nom = '';

                if ($utilisateur->type_utilisateur === 'entreprise') {
                    $entreprise = Entreprise::where('id', $utilisateur->id_compte)->first();
                    if ($entreprise) {
                        $nom = $entreprise->nom_entreprise;
                    }
                } elseif ($utilisateur->type_utilisateur === 'interimaire') {
                    $interimaire = Interimaire::where('id', $utilisateur->id_compte)->first();
                    if ($interimaire) {
                        $nom = $interimaire->nom . ' ' . $interimaire->prenom;
                    }
                }

                $plainte['nom'] = $nom;
                $plaintesAvecNom[] = $plainte;
            }
        }

        return response()->json($plaintesAvecNom);
    }



    public function porterPlainte(Request $request)
    {
        $plainte = Plainte::create([
            'id_compte' => $request->id_compte,
            'type_utilisateur' => $request->type_utilisateur,
            'motif' => $request->motif,
            'description' => $request->description,
        ]);

        //Notifier l'admin
        $utilisateur = Utilisateur::where('type_utilisateur', 'admin')->first();
        Mail::to($utilisateur->identifiant)->send(new ReceptionPlainte());
        return response()->json([
            'status' => 200,
            'message' => 'Plainte enregistrée avec succès'
        ]);
    }

    public function repondrePlainte(Request $request, $id)
    {
        $plainte = Plainte::find($id);

        if (!$plainte) {
            return response()->json([
                'status' => 400,
                'message' => 'Plainte introuvable'
            ]);
        }
        // Envoi de la réponse par e-mail 
        $utilisateur = Utilisateur::where('id_compte', $plainte->id_compte)->where('type_utilisateur', $plainte->type_utilisateur )->first();
        Mail::to($utilisateur->identifiant)->send(new ReponsePlainte([
            "reponse" => $request->reponse
        ]));

        return response()->json([
            'status' => 200,
            'message' => 'Réponse à la plainte envoyée avec succès'
        ]);
    }
}
