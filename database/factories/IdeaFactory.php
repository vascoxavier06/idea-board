<?php

use Faker\Generator as Faker;

$factory->define(IdeaBoard\Idea::class, function (Faker $faker) {
    return [
        'title'=>$faker->text(50),
        'description'=>$faker->text(150),
        'board_id'=> random_int(1,5)
    ];
});
