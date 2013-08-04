## Laravel 4 + Grunt

That's an empty [Laravel 4](http://github.com/laravel/laravel) project using [Grunt](https://github.com/gruntjs/grunt)
to compile javascript and stylesheet assets. You may customize it for your need.

### Dependencies

- [npm](http://nodejs.org/download/)
- [composer](http://getcomposer.org/download/)
- [gruntjs](http://gruntjs.com/getting-started)

### Installation

    $ composer install
    $ npm install

### Assets structure

    app/              # laravel application folder
    assets/           # public assets folder
    ├── javascripts/  # javascript source assets
    └── stylesheets/  # stylesheet source assets
    public/           # final public folder
    ├── app.min.js    # compiled javascript files
    └── app.min.css   # compiled stylesheet files

Run `grunt` to build the compiled assets, and `grunt watch` to watch for
changes.

### Artisan commands

- `db:reset` - Drop all tables, migrate, and seed.

### License

[MIT license](http://opensource.org/licenses/MIT)
