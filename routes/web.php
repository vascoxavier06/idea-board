<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/dashboard', 'HomeController@home')->name('home');
Auth::routes();
Route::namespace('Api')->group(function() {
    Route::resource('boards','BoardsController');
    Route::get('board/{id}/ideas', 'IdeasController@index');
    Route::get('board/{boardId}/ideas/{id}','IdeasController@show');
});
