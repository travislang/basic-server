$( document ).ready( readyNow );

function readyNow( ){
    $( '#textSubmit' ).on( 'click', handleClick );
}




function handleClick( ){
    console.log($('#textIn').val())
    let obj = {
        word: $( '#textIn' ).val( )
    }
    $.ajax({
        method: 'POST',
        url: '/words',
        data: obj
    }).then( function( res ){
        console.log( res );
        $('#textIn').val('');
    })
}

