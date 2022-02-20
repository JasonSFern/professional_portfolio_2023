<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Jason Salem Fernandes</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/for_test.css">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    />
    <script
      type="text/javascript"
      src="//app.storyblok.com/f/storyblok-latest.js"
    ></script>
</head>

<body class="antialiased">
    <noscript>
      <strong
        >We're sorry but Jason Fernandes' portfolio doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>

    <div id="app"></div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>