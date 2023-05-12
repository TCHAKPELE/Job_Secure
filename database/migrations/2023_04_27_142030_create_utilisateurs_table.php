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
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->id();
            $table->integer('id_compte')->comment('Id du compteur user. Sois interimaire ou entreprise');
            $table->string('identifiant')->unique();
            $table->string('mot_de_passe');
            $table->string('type_utilisateur');
            $table->integer('status_compte')->default(0)->comment('Un admin doit d abord valider le compte avant que le status passe à un');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};
