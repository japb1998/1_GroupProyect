
var apiKey="6eae682e48e94bbb990a8a75941f9e3e";
var cuisine=["Chinese", "Mexican", "Italian", "American", "Greek", "Thai"];
var value=[];

function displayRecipes(cuisinestr) {
    // var recipe=$(this.attr("data-name"))
    var recipeURL="https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisinestr + apiKey;
    console.log(recipeURL);
        $.ajax({
            url: recipeURL,
            method: "GET",
        }).then(function(response) {
            var recipeDiv=$("div class='recipes'>")
        })

    }
displayRecipes(cuisine[0])
// function generateRecipes() {
//     $("#display").on("click", function(){

//     })
// }