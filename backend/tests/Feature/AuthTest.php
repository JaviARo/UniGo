<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    /**
    * @doesNotPerformAssertions
    */
    public function test_aUserCanRegister()
    {
        $user = [
            'dni' => '00000000T',
            'name' => 'nametest',
            'email' => 'email@test.com',
            'username' => 'usernametest',
            'password' => 'passwordtest',
            'confirm_password' => 'passwordtest'
        ];

        //dd($user);

        $response = $this->post('/register', $user);

        $this->assertAuthenticated();
    }
}
