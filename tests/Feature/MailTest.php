<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

// test de la fonction d'envoie d'email
class MailTest extends TestCase
{
    use RefreshDatabase;
    public function test_mail(): void
    {
        
        $response = $this->post('/api/admin/valider_compte', [
            "id_utilisateur" => 2
        ]);

          $response->assertStatus(200); // Vérifie que la requête a réussi

    }
}
