<?php

use Illuminate\Database\Seeder;

class BoardTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(IdeaBoard\Board::class, 5)->create();
    }
}
