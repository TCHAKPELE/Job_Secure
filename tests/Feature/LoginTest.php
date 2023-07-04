<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

// test de la fonction d'authentification
class LoginTest extends TestCase
{

    use RefreshDatabase;
    public function test_login(): void
    {
        
        $response = $this->post('/api/login', [
            'identifiant' => 'k.tchakpele@gmail.com',
            'mot_de_passe' => 'Demo123'
        ]);

          $response->assertStatus(200); // Vérifie que la requête a réussi
          $response->assertJson(['status' => 200]); // Vérifie que la réponse est au format JSON avec un statut de 200

    }
}
