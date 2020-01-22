// JavaScript Document

$(document).ready( function() {
  $.getJSON("https://docs.google.com/spreadsheets/d/1k2w_hEzVU0sEXfau0lN5F53lhLqPJSzvq9n0cWqKZxw/edit#gid=0",
   function(data) {
   $('#noticias').append("<p>"+data.feed.entry[0].content.$t+"</p>");
$('#noticias').append("<p>"+data.feed.entry[1].content.$t+"</p>");
$('#noticias').append("<p>"+data.feed.entry[2].content.$t+"</p>"); 
  });
});
