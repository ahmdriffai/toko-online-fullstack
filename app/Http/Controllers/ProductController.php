<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductAddRequest;
use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    private ProductRepository $productRepsoitory;

    public function __construct(ProductRepository $productRepository) {
        $this->productRepsoitory = $productRepository;
    }

    public function store(ProductAddRequest $request)
    {
        $categoryId = $request->input('category_id');
        $detailProduct = [
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'stock' => $request->input('stock'),
        ];

        try {
            $this->productRepsoitory->create($detailProduct, $categoryId);
            return redirect()->back()->with('message', 'Berhasil menambah data product');
        } catch (\Throwable $th) {
            abort(500);
        }
    }

    public function detail($id)
    {
        $product = Product::find($id);
        return Inertia::render('Product/Detail', [
            'product' => $product,
        ]);
    }
}
