<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('candidatures', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_entreprise');
            $table->foreign('id_entreprise')->references('id')->on('entreprises');
            $table->unsignedBigInteger('id_interimaire');
            $table->foreign('id_interimaire')->references('id')->on('interimaires');
            $table->unsignedBigInteger('id_offre');
            $table->foreign('id_offre')->references('id')->on('offres');
            $table->integer('status_acceptation')->default(0)->comment("1 Pour candidature accepté");
            $table->date('date_creation')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidatures');
    }
};
