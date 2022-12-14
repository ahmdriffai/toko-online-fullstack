<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(3),
            'description' => $this->faker->text(),
            'price' => $this->faker->randomNumber(6),
            'stock' => 100,
            'category_id' => Category::factory()->create()->id,
        ];
    }
}
