let express = require( 'express' );
let router = express.Router();

router.post( '/', ( req, res )=>{
 console.log( 'in /math POST:', req.body );
 let answer = 0;
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
 res.send( 'woof' );
})// end POST

module.exports = router;