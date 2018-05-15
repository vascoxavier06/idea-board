<?php

use Faker\Generator as Faker;

$factory->define(IdeaBoard\Board::class, function (Faker $faker) {
    return [
        'name' => $faker->paragraph,
        'user_id'=>1
    ];
});
