<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('missions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_interimaire');
            $table->foreign('id_interimaire')->references('id')->on('interimaires');
            $table->unsignedBigInteger('id_offre');
            $table->foreign('id_offre')->references('id')->on('offres');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->integer('salaire_mission');
            $table->string('statut_mission');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('missions');
    }
};
