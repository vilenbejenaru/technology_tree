<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Technology Tree</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" type= "text/css" href="/css/app.css">
    </head>
    <body>
        <div id="app">
             <technology-tree-app></technology-tree-app>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
