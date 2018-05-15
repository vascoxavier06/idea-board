<?php

use Faker\Generator as Faker;

$factory->define(IdeaBoard\Board::class, function (Faker $faker) {
    return [
        'name' => $faker->text(50),
        'user_id'=>1
    ];
});
