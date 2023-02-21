<?php

namespace Database\Factories;

use App\Models\image;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Http\Testing\File;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    protected $model = image::class;
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'img' => File::create('logo.png', 100),
            'user_id' => 2,
        ];
    }
}
