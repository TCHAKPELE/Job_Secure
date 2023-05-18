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
        Schema::create('missions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_interimaire');
            $table->foreign('id_interimaire')->references('id')->on('interimaires');
            $table->unsignedBigInteger('id_offre');
            $table->foreign('id_offre')->references('id')->on('offres');
            $table->unsignedBigInteger('id_candidature');
            $table->foreign('id_candidature')->references('id')->on('candidatures');
            $table->unsignedBigInteger('id_entreprise');
            $table->foreign('id_entreprise')->references('id')->on('entreprises');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->integer('status_mission')->default(1)->comment("1 Pour dire active, 0 pour cloturé, 2 pour suspendu");
            $table->date('date_creation')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('misisons');
    }
};
