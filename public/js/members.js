$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});

$("#good-news").click(function () {
  alert("Handler for .click() called.");

  var url = 'https://newsapi.org/v2/everything?' +
    'q=retirement&' +
    'from=2019-10-05&' +
    'sortBy=popularity&' +
    'pageSize=5&' +
    'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
    'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

  var req = new Request(url);

  fetch(req)
    .then(function (response) {
      console.log("trae test", response.json());
    })
});