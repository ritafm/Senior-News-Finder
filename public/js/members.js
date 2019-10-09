$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });


  //newsapi.org
  $("#good-news").click(function () {


    var url = 'https://newsapi.org/v2/everything?' +
      'q=retirement&' +
      'from=2019-10-05&' +
      'sortBy=popularity&' +
      'pageSize=5&' +
      'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
      'apiKey=0642787cf5e744f68ecb6d77e9c99efb';


    var req = new Request(url);
    fetch(req)
    .then(resp => resp.json())
    // Make sure to return articles from this function after logging it
    .then(({articles}) => { console.log(articles); return articles; })
    // Take the articles as an argument, then log the author property of the first entry.
    // .then(articles => console.log(articles["0"].author))
    .then(articles => {
    for (let i = 0; i < articles.length; i++) {
      $("#goodArticles").append("<a href='" + articles[i].url + "'>" + articles[i].title + "</a><br>");  
    }
  })
  });


  $("#health-news").click(function () {

    var url1 = 'https://newsapi.org/v2/everything?' +
      'q=retirement&' +
      'from=2019-10-05&' +
      'sortBy=popularity&' +
      'pageSize=5&' +
      'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
      'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

    var req1 = new Request(url1);
    fetch(req1)
    .then(resp => resp.json())
    // Make sure to return articles from this function after logging it
    .then(({articles}) => { console.log(articles); return articles; })
    // Take the articles as an argument, then log the author property of the first entry.
    // .then(articles => console.log(articles["0"].author))
    .then(articles => {
    for (let i = 0; i < articles.length; i++) {
      $("#healthArticles").append("<a href='" + articles[i].url + "'>" + articles[i].title + "</a><br>");  
    }
  })
  });


  $("#financial-news").on("click",function() {

    var url2 = 'https://newsapi.org/v2/everything?' +
      'q=retirement&' +
      'from=2019-10-05&' +
      'sortBy=popularity&' +
      'pageSize=5&' +
      'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
      'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

    var req2 = new Request(url2);

    fetch(req2)
    .then(resp => resp.json())
    // Make sure to return articles from this function after logging it
    .then(({articles}) => { console.log(articles); return articles; })
    // Take the articles as an argument, then log the author property of the first entry.
    // .then(articles => console.log(articles["0"].author))
    .then(articles => {
    for (let i = 0; i < articles.length; i++) {
      $("#financeArticles").append("<a href='" + articles[i].url + "'>" + articles[i].title + "</a><br>");  
    }
    })
  })
});