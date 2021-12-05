<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;
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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('technology/{technology}/export', [App\Http\Controllers\TechnologyController::class, 'export']);
Route::get('/{any}', 'SpaController@index')->where('any', '.*');
Route::get('/about', 'SpaController@index')->where('about', '.*');

