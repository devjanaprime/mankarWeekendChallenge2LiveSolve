class Calculation{
  constructor( xIn, yIn, operatorIn ){
    this.x = xIn;
    this.y = yIn;
    this.operator = operatorIn;
  } //end constructor
} // end class

let selectedOperator = '';

$( document ).ready( readyNow );

function readyNow(){
  $( '#clearButton' ).on( 'click', clear );
  $( '#equalsButton' ).on( 'click', equals );
  $( '.operatorButton' ).on( 'click', operator );
} //end readyNow

function clear(){
  console.log( 'in clear' );
  $( '#num0In' ).val('');
  $( '#num1In' ).val('');
}

function equals(){
  console.log( 'in equals' );
  // get user inputs for number combine with selected operator create new Calculation
  let calcToSend = new Calculation( $( '#num0In' ).val(), $( '#num1In' ).val(), selectedOperator );
  console.log( 'sending:', calcToSend );
  // send to server via post
  $.ajax({
    method: 'POST',
    url: '/math',
    data: calcToSend
  }).then( function( response ){
    console.log( 'back from server with:', response );
    // update DOM with answer 
    // update DOM with history
  }) //end ajax
}

function operator(){
  console.log( 'in operator:', $( this ).text() );
  selectedOperator = $( this ).text();
  console.log( 'selected operator:', selectedOperator );
}