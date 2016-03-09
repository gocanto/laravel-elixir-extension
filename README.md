## Laravel Elixir Extension to copy bower components fonts into desired directory


This is just one of millions of approach to control CSS packages fonts in our projects. This example uses an elixir extension to complete this duty

## Bower 

The first step is to setup Bower. Create a new local directory and “cd” into it. Next run bower init and following the instructions.

After that process finishes, we have to install the required bower packages:

```
bower install fontawesome --save
```

## Gulp

Next, you'll want to pull in Gulp as a global NPM package:

```
npm install --global gulp
```

## Laravel Elixir

The only remaining step is to install Elixir! Within a fresh installation of Laravel, you'll find a package.json file in the root. Think of this like your composer.json file, except it defines Node dependencies instead of PHP. You may install the dependencies it references by running:

```
npm install
```

<a href="https://laravel.com/docs/5.2/elixir" target="_blank">More info</a>



## Elixir Folder

In this directory you will find the code required to accomplish this job, as an json file to control the configuration of your application.



## Heads Up

If you want to run this example just run ```gulp``` in your terminal 

