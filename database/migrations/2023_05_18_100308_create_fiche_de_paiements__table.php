<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fiche_de_paiements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_mission');
            $table->foreign('id_mission')->references('id')->on('missions');
            $table->integer('nbr_heure_effectuees');
            $table->timestamp('date_paiement')->default(now());
            $table->integer('montant_paiement');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fiche_de_paiements_');
    }
};
