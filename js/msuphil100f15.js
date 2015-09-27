
// Initiate externals

$(function(){ 
  $("[data-role=panel]").panel({ theme: "a" }).enhanceWithin();
  $("[data-role=footer]").toolbar({ theme: "a" }).enhanceWithin();
  $("[data-role=header]").toolbar({ theme: "a" }).enhanceWithin();
});

// Inject page-specific content in externals

$( document ).on( "pagecontainerchange", function() {
  
  var current = $( ".ui-page-active" ).jqmData( "title" ),
      point = $( ".ui-page-active" ).index();

  // Set progress bar
  $( "input#progress" ).attr("value", point);

  // Change heading
  $( "[data-role='footer'] h1" ).text( current );

  // Change next and previous links
  var next = "#" + $( ".ui-page-active" ).next( "[data-role='page']" ).attr("id"),
      prev = "#" + $( ".ui-page-active" ).prev( "[data-role='page']" ).attr("id");

  $( "#prev-link" ).attr("href", prev);
  $( "#next-link" ).attr("href", next);

  if ( $( ".ui-page-active" ).next( "[data-role='page']" ).length == 0 ) {
      $( "#next-link" ).css( 'display','none' );
  } else {
      $( "#next-link" ).css( 'display','block' );
  }
  if ( $( ".ui-page-active" ).prev( "[data-role='page']" ).length == 0 ) {
      $( "#prev-link" ).css( 'display','none' );
  } else {
      $( "#prev-link" ).css( 'display','block' );
  }

});

$(document ).on( "swipeleft", function() {

  var next = "#" + $( ".ui-page-active" ).next( "[data-role='page']" ).attr("id");

  $( ":mobile-pagecontainer" ).pagecontainer( "change", next, {
    transition: "slide",
  });

});

$(document ).on( "swiperight", function() {

  var prev = "#" + $( ".ui-page-active" ).prev( "[data-role='page']" ).attr("id");

  $( ":mobile-pagecontainer" ).pagecontainer( "change", prev, {
    transition: "slide",
    reverse: true
  });

});

  $( ".info" ).click( function() {

    $(this).next( ".hid" ).slideToggle( "slow" );

  }); 
