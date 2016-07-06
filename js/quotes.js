$("#new-quote").click(function() {
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies", 
    beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'SOXrYdKO9Zmsh5qVboGgIheye283p13cZtQjsnNwDQrYrbv4ii');
                              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                              xhr.setRequestHeader('Accept', 'application/json');},
    dataType: "json",
    success: function(data) {
      
      $("#quote").html(data.quote);
      $("#author").text(data.author);
      
      // Update twitter web intent link with new quote 
      url = "https://twitter.com/intent/tweet?text=" + encodeURI(data.quote) + " --" + encodeURI(data.author);
      $("#tweet").attr("href", url);
    }
  });
});


$(document).ready(function() {
  // Init document with random quote by clicking button
  $("#new-quote").click();
});
