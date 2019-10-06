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
      console.log("good-news test", response.json());
    })

  });

$("#health-news").click(function () {
  alert("Handler for .click() called.");

  var url1 = 'https://newsapi.org/v2/everything?' +
    'q=retirement,health&' +
    'from=2019-10-05&' +
    'sortBy=popularity&' +
    'pageSize=5&' +
    'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
    'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

  var req1 = new Request(url1);

  fetch(req1)
    .then(function (response) {
      console.log("health-news test", response.json());
    })
});

$("#financial-news").click(function () {
  alert("Handler for .click() called.");

  var url2 = 'https://newsapi.org/v2/everything?' +
    'q=retirement,financial&' +
    'from=2019-10-05&' +
    'sortBy=popularity&' +
    'pageSize=5&' +
    'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
    'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

  var req2 = new Request(url2);

  fetch(req2)
    .then(function (response) {
      console.log("financial-news test", response.json());
    })
});