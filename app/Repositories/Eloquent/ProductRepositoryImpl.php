<?php

namespace App\Repositories\Eloquent;

use App\Models\Category;
use App\Models\Product;
use App\Repositories\ProductRepository as RepositoriesProductRepository;

class ProductRepositoryImpl implements RepositoriesProductRepository {

    function create($detail, $categoryId)
    {
        $category = Category::all()->find($categoryId);
        $product  = new Product($detail);
        $category->products()->save($product);
        return $product;
    }
}