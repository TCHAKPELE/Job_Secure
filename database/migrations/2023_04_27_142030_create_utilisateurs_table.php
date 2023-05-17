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
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->id();
            $table->integer('id_compte')->comment('Id du compteur user. Sois interimaire ou entreprise');
            $table->string('identifiant')->unique();
            $table->string('mot_de_passe');
            $table->string('type_utilisateur');
            $table->integer('status_compte')->default(1)->comment('Vérifie si le compte est suspendu ou pas. 1 si non');
            $table->integer('activation_compte')->default(0)->comment('Un admin doit d abord valider le compte avant que le status passe à un');
            $table->timestamps();
        });

        // Insérer l'utilisateur admin par défaut
        DB::table('utilisateurs')->insert([
            'id_compte' => 0,
            'identifiant' => 'admin',
            'mot_de_passe' => bcrypt('rasmuslerdorf'),
            'type_utilisateur' => 'admin',
            'status_compte' => 1,
            'activation_compte' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};
