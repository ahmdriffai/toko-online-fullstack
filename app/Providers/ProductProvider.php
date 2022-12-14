<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Product;
use App\Repositories\Eloquent\ProductRepositoryImpl;
use App\Repositories\ProductRepository;
use Illuminate\Support\ServiceProvider;

class ProductProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ProductRepository::class, ProductRepositoryImpl::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
