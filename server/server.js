// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' ) 
let math = require( './modules/math' );
// globals
const port = 5000;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/math', math );
//server up
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up