<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

// test de la fonction qui récupère la liste des entreprises
class GetEntrepriseTest extends TestCase
{

    use RefreshDatabase;
    public function test_getentreprise(): void
    {
        
        $response = $this->get('/api/entreprises');

            $response->assertStatus(200); // Vérifie que la requête a réussi

    }
}
