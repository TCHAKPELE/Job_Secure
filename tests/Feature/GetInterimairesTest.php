<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetInterimairesTest extends TestCase
{

    use RefreshDatabase;
    public function test_getinterimaire(): void
    {
        
        $response = $this->get('/api/interimaires');

            $response->assertStatus(200); // Vérifie que la requête a réussi

    }
}
