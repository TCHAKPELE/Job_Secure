<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EntrepriseController;
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