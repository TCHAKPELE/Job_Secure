<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Interimaire;



// test de l'ajout d'utilisateur
class AddUserTest extends TestCase
{

    use RefreshDatabase;
    public function test_register(): void
    {             

                
        $response = $this->post('/api/login', [
            'identifiant' => 'k.tchakpele@gmail.com',
            'mot_de_passe' => 'Demo123'
        ]);

        $response->assertStatus(200);
        $this->assertEquals('k.tchakpele@gmail.com', $response->identifiant);
        
    }
}
