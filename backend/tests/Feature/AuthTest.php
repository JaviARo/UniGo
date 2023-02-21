<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    
    public function test_aUserCanRegister()
    {
        // Comprueba que el usuario se puede registrar
        $user = [
            'dni' => '00000000T',
            'name' => 'nametest',
            'email' => 'email@test.com',
            'username' => 'usernametest',
            'password' => 'passwordtest',
            'confirm_password' => 'passwordtest',
            'type' => 'c'
        ];
        $response = $this->post('api/register', $user);
        $response->assertStatus(200);
    }

    public function test_passwordMustBeTheSame()
    {
        // Comprueba que el usuario no se registra 
        // si no repite la contraseña correctamente
        $user = [
            'dni' => '00000000T',
            'name' => 'nametest',
            'email' => 'email@test.com',
            'username' => 'usernametest',
            'password' => 'passwordtest',
            'confirm_password' => 'notsamepassword',
            'type' => 'c'
        ];
        $response = $this->post('api/register', $user);
        $response->assertStatus(404);
    }

    public function test_allFieldsMustBePassed()
    {
        // Comprueba que el usuario no se registra 
        // si no introduce todos los datos
        $user = [
            'dni' => '00000000T',
            'email' => 'email@test.com',
            'username' => 'usernametest',
            'password' => 'passwordtest',
            'confirm_password' => 'passwordtest',
            'type' => 'c'
        ];
        $response = $this->post('api/register', $user);
        $response->assertStatus(404);
    }
}
