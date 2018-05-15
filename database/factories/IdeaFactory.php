<?php

use Faker\Generator as Faker;

$factory->define(IdeaBoard\Idea::class, function (Faker $faker) {
    return [
        'title'=>str_random(50),
        'description'=>$faker->paragraph,
        'board_id'=> random_int(1,5)
    ];
});
