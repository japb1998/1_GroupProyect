
var $apiKey="399885ef1dffc6fdfd42c5f1a6bdb34c";
var $appId="b2baeb67";
var $cuisineBtn=(".")
var $cuisine=["Chinese", "Mexican", "Italian", "American", "Mediterranean", "Indian"];

function getRecipes(cuisine) {
    console.log(cuisine);
    var recipeURL="https://api.edamam.com/search?&app_id=" + appId + "app_key=" + apiKey + "&cuisineType=" + cuisine;
    $.ajax ({
        url: recipeURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
    })
}
getRecipes();