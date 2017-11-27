$(document).ready(function(){

  getQuote();
  var randomQuote;
  var author;

  function getQuote(){

    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

    $.getJSON(url,function(data){

      randomQuote=data.quoteText;
      author=data.quoteAuthor;

      $(".quote").html('"'+randomQuote+'"');
      $(".author").html(" -"+author);
    });
  }

  $("#newQuote").on('click',function(){
    getQuote();
  });

  $("#tweet").on('click',function(){
    console.log(randomQuote+" "+author);
    window.open("https://twitter.com/intent/tweet?text="+randomQuote+" -"+author);
  });

});
