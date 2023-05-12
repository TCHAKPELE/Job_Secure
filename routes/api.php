<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\MissionController;
use App\Http\Controllers\EntrepriseController;
use App\Http\Controllers\CandidatureController;
use App\Http\Controllers\InterimaireController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/*------Login user ---------*/
Route::post("login", [AuthController::class, "login"]);

/*------ End login ---------*/

/*------Admin ---------*/
Route::post("admin", [AdminController::class, "validerCompte"]);

Route::get("admin/interimaires_non_valides",  [AdminController::class, "interimairesNonValides"]);
Route::get("admin/entreprises_non_valides",  [AdminController::class, "entreprisesNonValides"]);
Route::get("admin/interimaires_valides",  [AdminController::class, "interimairesValides"]);
Route::get("admin/entreprises_valides",  [AdminController::class, "entreprisesValides"]);
/*------ Admin ---------*/

/* ---- Interimaire ---*/
Route::get("interimaires", [InterimaireController::class, "getInterimaires"]);
Route::get("interimaire/{id}", [InterimaireController::class, "getOneInterimaire"])->whereNumber('id');

Route::post("interimaire", [InterimaireController::class, "addInterimaire"]);
//Mise à jour
Route::put("interimaire/{id}", [InterimaireController::class, "updateInterimaire"]);
//Suppression
Route::delete("interimaire/{id}", [InterimaireController::class, "deleteInterimaire"]);
/*  --------- End interimaire ----- */

/* ---- Entreprise ---*/
Route::get("entreprises", [EntrepriseController::class, "getEntreprises"]);
Route::get("entreprise/{id}", [EntrepriseController::class, "getOneEntreprise"])->whereNumber('id');

Route::post("entreprise", [EntrepriseController::class, "addEntreprise"]);

//Mise à jour
Route::put("entreprise/{id}", [EntrepriseController::class, "updateEntreprise"]);
//Suppression
Route::delete("entreprise/{id}", [EntrepriseController::class, "deleteEntreprise"]);
/*  --------- End Entreprise ----- */


/* ---- Offre ---*/
//Tous les offres
Route::get("offres", [OffreController::class, "getOffres"]);

//Offre par entreprise
Route::get("offres/{id}", [OffreController::class, "getOffresByEntreprise"]);

//Une seul offre
Route::get("offre/{id}", [OffreController::class, "getOneOffre"])->whereNumber('id');

//Ajouter une offe
Route::post("offre", [OffreController::class, "addOffre"]);

//Mise à jour
Route::put("offre/{id}", [OffreController::class, "updateOffre"]);
//Suppression
Route::delete("offre/{id}", [OffreController::class, "deleteOffre"]);

/* ---- End  Offre ---*/


/*------- Candidature -------*/
//{filter} sera remplacé par entreprise, interimaire, ou offre
Route::get("candidatures/{id}/{filter}", [CandidatureController::class, "getCandidaturesByFilters"]);

//Accepter candidature
Route::get("candidature/{id}/acceptation",  [CandidatureController::class, "accepterCandidature"]);

//Postuler
Route::post("candidature", [CandidatureController::class, "postulerOffre"]);
/*-------- End candidature -------*/

/* ---- mission ---*/
//Tous les missions
Route::get("missions", [MissionController::class, "getMissions"]);

//mission par offre
Route::get("missions/{id}/offre", [MissionController::class, "getMissionsByOffre"]);

//mission par entreprise
Route::get("missions/{id}/entreprise", [MissionController::class, "getMissionsByEntreprise"]);

//mission par interimaire
Route::get("missions/{id}/interimaire", [MissionController::class, "getMissionsByInterimaire"]);

//Une seul mission
Route::get("mission/{id}", [MissionController::class, "getOneMission"])->whereNumber('id');

//Changer status mission
Route::get("mission/{id}/{status}", [MissionController::class, "changerStatusMission"]);

//Ajouter une mission
Route::post("mission", [MissionController::class, "addMission"]);

//Mise à jour
Route::put("mission/{id}", [MissionController::class, "updateMission"]);
//Suppression
Route::delete("mission/{id}", [MissionController::class, "deleteMission"]);

/* ---- End  mission ---*/

