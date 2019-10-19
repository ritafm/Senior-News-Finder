  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });


  //newsapi.org
  $("#good-news").click(function () {
    $("#goodArticles").empty();

    var url = 'https://newsapi.org/v2/everything?' +
      'q=happy AND elderly NOT fiction&' +
      'sortBy=popularity&' +
      'pageSize=3&' +
      'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
      'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

    var req = new Request(url);
    fetch(req)
      .then(resp => resp.json())
      .then(({
        articles
      }) => {
        return articles;
      })

      .then(articles => {
        for (let i = 0; i < articles.length; i++) {
          var $newDiv = $('<class="fb-share-button" data-href="' + articles[i].url + '" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + articles[i].url + '&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share to Facebook</a>');

          $("#goodArticles").append($newDiv);

          $("#goodArticles").append("<img class='linkPic' src='" + articles[i].urlToImage + "'>" + "<a href='" +
            articles[i].url + "'>" + articles[i].title + "</a><br><br><br>");
        }
      })
  });



  $("#financial-news").on("click", function () {
    $("#financeArticles").empty();

    var url2 = 'https://newsapi.org/v2/everything?' +
      'q=finance AND elderly NOT Hong &' +
      'sortBy=popularity&' +
      'pageSize=3&' +
      'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
      'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

    var req2 = new Request(url2);
    fetch(req2)
      .then(resp => resp.json())
      .then(({
        articles
      }) => {
        return articles;
      })
      .then(articles => {
        for (let i = 0; i < articles.length; i++) {
          var $newDiv = $('<class="fb-share-button" data-href="' + articles[i].url + '" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + articles[i].url + '&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share to Facebook</a>');

          $("#financeArticles").append($newDiv);

          $("#financeArticles").append("<img class='linkPic' src='" + articles[i].urlToImage + "'>" + "<a href='" +
            articles[i].url + "'>" + articles[i].title + "</a><br><br><br>");
        }
      })
  });


  $("#health-news").click(function () {
    $("#healthArticles").empty();

    var url1 = 'https://newsapi.org/v2/everything?' +
      'q=elderly AND health NOT rioting &' +
      'sortBy=popularity&' +
      'pageSize=3&' +
      'sources=associated-press,abc-news,cnn,the-washington-post,the-washington-times,the-new-york-times,msnbc,cbs-news,medical-news-today,nbc-news,newsweek,the-wall-street-journal,new-york-magazine,google-news&' +
      'apiKey=0642787cf5e744f68ecb6d77e9c99efb';

    var req1 = new Request(url1);
    fetch(req1)
      .then(resp => resp.json())
      .then(({
        articles
      }) => {
        // console.log(articles);
        return articles;
      })

      .then(articles => {
        for (let i = 0; i < articles.length; i++) {
          var $newDiv = $('<a class="fb-share-button" data-href="' + articles[i].url + '"data-layout="button_count" data-size="small" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + articles[i].url + '&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share to Facebook</a>');

          $("#healthArticles").append($newDiv);

          $("#healthArticles").append("<img class='linkPic' src='" + articles[i].urlToImage + "'>" + "<a href='" +
            articles[i].url + "'>" + articles[i].title + "</a><br><br><br>");

        }
      })
  });