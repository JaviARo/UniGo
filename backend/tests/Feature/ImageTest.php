<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\image;
use Laravel\Sanctum\Sanctum;

class ImageTest extends TestCase
{
    public function test_userMustBeenLoggedToPostImage()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );

        $image = image::factory()->create();
        

        // Este test comprueba que falle la función post
        // cuando no se le pasan dos campos requeridos
        $response = $this->json('POST', 'api/image', 
            ['name' => $image->name],
            ['user_id' => $image->user_id],
            ['img' => $image->img]);
        
        $response->assertStatus(200);
    }

    public function test_userCantPostImageIfNotLogged()
    {
        $response = $this->json('POST', 'api/image', 
            ['name' => 'Ejemplo'],
            ['user_id' => 0],
            ['img' => 'Ejemplo']);
        
        $response->assertStatus(401);
    }
}
