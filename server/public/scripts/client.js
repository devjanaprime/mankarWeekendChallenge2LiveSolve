class Calculation{
  constructor( xIn, yIn, operatorIn ){
    this.x = xIn;
    this.y = yIn;
    this.operator = operatorIn;
  } //end constructor
} // end class

let selectedOperator = '';
let x = '';
let y = '';

$( document ).ready( readyNow );

function readyNow(){
  $( '#clearButton' ).on( 'click', clear );
  $( '#equalsButton' ).on( 'click', equals );
  $( '.operatorButton' ).on( 'click', operator );
  getHistory();
} //end readyNow

function clear(){
  console.log( 'in clear' );
  $( '#num0In' ).val( '' );
  $( '#num1In' ).val( '' );
  selectedOperator='';
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
    let el = $( '#answerOut' );
    el.empty();
    el.append( response.answer );
    // update DOM with history
    getHistory();
  }) //end ajax
}

function getHistory(){
  // get call to server
  $.ajax({
    method: 'GET',
    url: '/math'
  }).then( function( response ){
    console.log( response );
    let el = $( '#historyOut' );
    el.empty();
    // loop through response
    for( calc of response ){
      // display each in ul on DOM
      el.append( '<li>' + calc.x + ' ' + calc.operator + ' ' + calc.y +'</li>' );
    }
  }) // end ajax
}

function operator(){
  console.log( 'in operator:', $( this ).text() );
  selectedOperator = $( this ).text();
  console.log( 'selected operator:', selectedOperator );
}