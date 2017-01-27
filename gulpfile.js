var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var elixir = require('laravel-elixir');

elixir((mix) => {
	mix.sass('./app/resources/assets/sass/app.scss');
});

