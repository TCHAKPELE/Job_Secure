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
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_interimaire');
            $table->unsignedBigInteger('id_mission');
            $table->decimal('note');
            $table->timestamp('date_creation')->default(now());
            $table->timestamps();

            $table->foreign('id_interimaire')->references('id')->on('interimaires')->onDelete('cascade');
            $table->foreign('id_mission')->references('id')->on('missions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};
