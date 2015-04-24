//Me aseguro que cargue todo la pagina no solo el DOM
// https://learn.jquery.com/using-jquery-core/document-ready/
// con  $( window ).load

//Luego utilizo getJSON para bajarme el objeto y extraer las partes que me interesan


$( window ).load(function(){  
  $.getJSON( "https://www.reddit.com/.json", function( data ) {
    var items = [];
    $.each( data["data"]["children"], function(key, val ) {
      items.push( "<tr><td><a href='" + "https://www.reddit.com/" + val["data"]["permalink"] + "'>" + val["data"]["title"] + "</a></td></tr>" );
      // items.push( "<td>" + val["data"]["author"] + "</td>" );
      // items.push( "<td>" + "https://www.reddit.com/" + val["data"]["permalink"] + "</td>" );
      // items.push( "<td>" + val["data"]["created_utc"] + "</td>" );
    });
    
    $( "<tr/>", {
      html: items.join( "" )
    }).appendTo( "table" );
  });
});


