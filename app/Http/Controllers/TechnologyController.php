<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Technology;

class TechnologyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
//           return Technology::select(['name'])->get();
//          return Technology::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Technology::find($id);
    }

    public function export(Technology $technology)
    {
        $videos = $technology->video->toArray();
        $result = Technology::find($technology);
        $result = json_decode($result, TRUE);
        $result[0]['video'] = $videos;
        $json = json_encode($result);
        return $json;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
