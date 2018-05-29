let express = require( 'express' );
let router = express.Router();

// history of all calculations
let history = [];

router.get( '/', ( req, res )=>{
    res.send( history );
}) // end GET

router.post( '/', ( req, res )=>{
 console.log( 'in /math POST:', req.body );
 let answer = 0;
 // push this into history
 history.push( req.body );
 // do math
 switch( req.body.operator ){
    case '+': 
        answer = Number( req.body.x ) + Number( req.body.y );
        break;
    case '-': 
        answer = Number( req.body.x ) - Number( req.body.y );
        break;
    case '*': 
        answer = Number( req.body.x ) * Number( req.body.y );
        break;
    case '/': 
        answer = Number( req.body.x ) / Number( req.body.y );
        break;
 } // end switch case
 console.log( 'answer:', answer );
 res.send( { answer: answer } );
})// end POST


module.exports = router;