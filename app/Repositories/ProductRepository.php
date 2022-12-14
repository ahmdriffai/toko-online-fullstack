<?php

namespace App\Repositories;

interface ProductRepository {
    function create($detail, $categoryId);
}