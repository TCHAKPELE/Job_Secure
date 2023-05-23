<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetOffreTest extends TestCase
{

    use RefreshDatabase;
    public function test_getoffre(): void
    {
        
        $response = $this->get('/api/offres');

        $response->assertStatus(200); // Vérifie que la requête a réussi

    }
}
