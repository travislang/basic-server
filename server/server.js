const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express( );
const PORT = 5000;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ));

app.get( '/words', function( req, res ){
    res.send( getWord );
})

app.post( '/words', function( req, res ){
    console.log( 'Reply:', req.body.word );
    addWord( req.body );
    res.send( addWord( req.body.word ) )
})




let words = ['hello'];

function addWord(word) {
    words = [];
    words.push(word);
}

function getword() {
    return words[0];
}


app.listen( PORT, function( ){
    console.log( `the server is listening on port ${PORT}` );
})