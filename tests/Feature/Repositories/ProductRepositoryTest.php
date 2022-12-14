<?php

namespace Tests\Feature\Repositories;

use App\Models\Category;
use App\Repositories\ProductRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use function PHPUnit\Framework\assertTrue;

class ProductRepositoryTest extends TestCase
{
    use RefreshDatabase;

    private ProductRepository $repository;

    function setUp(): void
    {
        parent::setUp();

        $this->repository = $this->app->make(ProductRepository::class);
    }

    public function test_create_product_with_category()
    {
        $category = Category::factory()->create();
        $detail = [
            'name' => 'Test Product',
            'description' => 'Description test',
            'price' => 1000,
            'stock' => 1,
        ];

        $this->repository->create($detail, $category->id);


        $this->assertDatabaseCount('products', 1);
        $this->assertDatabaseHas('products', [
            'category_id' => $category->id,
        ]);
    }
}
