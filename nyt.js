var app = {
    nyTimesArticles : [], 


initialize: function() {
    app.getNYTimesData();
},

makeHTML: function() {
    var theHTML = '';
    for (var i = 0; i < app.nyTimesArticles.length; i++){
        theHTML += "<div class='flickrArticle'>";
        theHTML += "<h3>" + app.nyTimesArticles[i].headline.main + "</h3>";
        theHTML += "</div>";
    }
},

getNYTimesData: function() {
    console.log("get the data!");
    var currentSearchWord = 'barack obama';
    var nyTimesURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + currentSearchWord + '&page=0&sort=newest&api-key=';
    var myNYTKey = '7xW3IHuhgvzACfYTfh67yAXVrkChvGMA';
    var nyTimesReqURL = nyTimesURL + myNYTKey;
    console.log(nyTimesReqURL);
    $.ajax({
        url: nyTimesReqURL,
        type: "GET",
        dataType: 'json',
        error: function(incorrect){
            console.log('something went wrong');
            console.log(incorrect);
        },
        success: function(data){
            app.nyTimesArticles = data.response.docs;
            console.log(app.nyTimesArticles);
            app.makeHTML();
        }
    });
}

}