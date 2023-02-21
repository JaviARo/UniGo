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
        // El usuario debe estar loggeado para postear
        // una imagen
        Sanctum::actingAs(
            User::factory()->create()
        );

        $image = image::factory()->create();
        $response = $this->json('POST', 'api/image', [
            'name' => $image->name,
            'img' => $image->img,
            'user_id' => $image->user_id, 
        ]);
        $response->assertStatus(200);
    }

    public function test_userCantPostImageIfNotLogged()
    {
        // No se puede subir una imagen si el
        // usuario no está loggeado
        $image = image::factory()->create();
        $response = $this->json('POST', 'api/image', [
            'name' => $image->name,
            'img' => $image->img,
            'user_id' => $image->user_id, 
        ]);
        $response->assertStatus(401);
    }
}
