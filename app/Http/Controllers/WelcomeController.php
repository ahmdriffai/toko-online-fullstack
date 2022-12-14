<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query()->with('category');

        if ($categoryInput = $request->query('category')) {
            $category = Category::where('name' ,$categoryInput)->first();
            $query->where('category_id', '=', $category->id);

        }

        if ($search = $request->query('s')) {
            $query->whereRaw("name LIKE '%" . $search . "%'")
                ->orWhereRaw("description LIKE '%" . $search . "%'");
        }

        $products = $query->get();
        $categories = Category::all();
        $banners = [
            'banner1' => asset('images/banner1.png'),
            'banner2' => asset('images/banner2.png'),
        ];
        return Inertia::render('Welcome', [
            'products' => $products ,
            'categories' => $categories,
            'banners' => $banners,
        ]);
    }
}
