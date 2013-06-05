var express = require( "express" ),
    nunjucks = require( "nunjucks" ),
    path = require( "path" ),
    i18n = require( "./lib/i18n.js" ),
    app = express(),
    nunjucksEnv = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, '/public' )));

nunjucksEnv.express( app );

// Setup locales with i18n
app.use( i18n.abide({
  supported_languages: [
    "en_US", "th_TH"
  ],
  default_lang: "en_US",
  translation_directory: "locale",
  localeOnUrl: true
}));

app.get('/', function(req, res){
    res.render( "localized.html" );
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');