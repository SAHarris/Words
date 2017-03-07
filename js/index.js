$(document).ready(function() {
  var quote;
  
  var author;
  
  function getAnother() {
  $.ajax({
    url: 'http://api.forismatic.com/api/1.0/',
    jsonp: 'jsonp',
    dataType: 'jsonp',
    data: { 
    method: 'getQuote', 
    format: 'jsonp',
    lang: 'en',
  },
    success: function(respond){
      console.log(respond.quoteText);
      quote  = respond.quoteText;
      author = respond.quoteAuthor;
      $('#quote').text(quote);
      if (author) {
        $('#author').text('quote by ' + author);
      }else{
        $('#author').text('qoute by Anonymous');
      }
    }
  });
} getAnother();
  
  
$('#getQuote').on('click', function(event){
   event.preventDefault();
   getAnother();
   });
  
  
$('#twitter').on('click', function(event){
  event.preventDefault();
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote +  ' Quote by ' + author));
                 
    });
  
  
});