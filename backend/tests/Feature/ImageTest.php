<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ImageTest extends TestCase
{
    public function test_designMustHaveUserIdAndImg()
    {
        // Este test comprueba que falle la función post
        // cuando no se le pasan dos campos requeridos
        $response = $this->json('POST', 'api/image', 
            ['name' => 'Ejemplo']);
        
        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors'=>['user_id','img']
            ]);
    }
}
